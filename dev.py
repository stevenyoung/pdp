# py
"""
mongodb allows flexible storage for scraped data
flask serves data via rest api
APP has simple spa as microservices demo.

/
serve index page to client.

/places/near/<lng>/<lat>
places near provided coords as json

/places/<id>
detailed information on provided place

"""

import logging
import re

import bson
from flask_pymongo import PyMongo
from flask_cors import CORS

from flask import Flask
from flask import current_app
from flask import jsonify
from flask import render_template

APP = Flask(__name__)
CORS(APP)

APP.config['MONGO_DBNAME'] = 'pdp-jan2016'
MONGO = PyMongo(APP)


def _doc_as_dict(doc=None):
  """ return mongo doc with fields for rest api """
  if doc:
    summary = {
        'id': str(doc['_id']),
        'title': doc['title'],
        'author': doc['author'],
        'name': doc['scenelocation'],
        'lat': doc['loc']['coordinates'][1],
        'lng': doc['loc']['coordinates'][0],
        'loc': doc['loc'],
        'attribution': doc['attribution'],
        'url':doc['url']
    }
    if 'scenedescription' in doc:
      summary['scenedescription'] = doc['scenedescription']
    if 'notes' in doc:
      if doc['notes'] != doc['scenedescription']:
        summary['scenedescription'] += ' {}'.format(doc['notes'])
    return summary
  else:
    return None


@APP.route('/places/near/<lng>/<lat>')
def nearby(lng, lat):
  ''' return places near given coordinates '''
  query = {'loc': {'$within': {'$center': [[float(lng), float(lat)], 6]}}}
  nearby_places = MONGO.db.places.find(query)
  places_json = []
  [places_json.append({'place': _doc_as_dict(place)}) for place in nearby_places]
  return jsonify({'result': places_json})

@APP.route('/place/<scene_id>')
def place_data(scene_id):
  """ get data for a specific scene """
  place = MONGO.db.places.find_one({'_id': bson.ObjectId(oid=scene_id)})
  return jsonify({'result': _doc_as_dict(place)})


@APP.route('/search/')
def empty_search():
  return jsonify({'result': []})


@APP.route('/search/<term>')
def query_place_collection(term):
  """ places where author or title or location name starts with search term. """
  query_exp = re.compile('{}'.format(term), re.IGNORECASE)
  query_filter = {
      '$or': [
          {'author': query_exp},
          {'title': query_exp},
          {'scenelocation': query_exp}
      ]
  }
  places = MONGO.db.places.find(query_filter)
  places_json = []
  [places_json.append({'place': _doc_as_dict(place)}) for place in places]
  return jsonify({'result': places_json})


@APP.route('/')
def index():
  ''' home page '''
  return current_app.send_static_file('index.html')


@APP.route('/<path:path>')
def static_proxy(path):
  # send_static_file will guess the correct MIME type
  return current_app.send_static_file(path)


@APP.errorhandler(500)
def server_error(error):
  ''' oops Log the error and stacktrace. '''
  logging.exception('An error occurred during a request. %s', (error))
  return 'An internal error occurred.', 500
