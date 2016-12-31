# py
"""
mongodb allows flexible storage for scraped data
flask serves data via rest api
app has simple spa as microservices demo.

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
from flask import jsonify
from flask import render_template
from flask import request

app = Flask(__name__)
CORS(app)

app.config['MONGO_DBNAME'] = 'pdp-nov2016'
# APP.config['MONGO_URI'] = 'mongodb://localhost:27017/restdb'

mongo = PyMongo(app)

def _doc_as_dict(doc=None):
  """ return mongo doc with fields for rest api """
  if doc:
    return({'id': str(doc['_id']),
            'title': doc['title'],
            'author': doc['author'],
            'name': doc['scenelocation'],
            'notes': doc['notes'],
            'lat': doc['loc']['coordinates'][1],
            'lng': doc['loc']['coordinates'][0],
            'loc': doc['loc']
           })
  else:
    return None

@app.route('/places/near/<lng>/<lat>')
def nearby(lng, lat):
  ''' return places near given coordinates '''
  query = {'loc': {'$within': {'$center': [[float(lng), float(lat)], 6]}}}
  nearby_places = mongo.db.places.find(query)
  output = []
  for doc in nearby_places:
    output.append(_doc_as_dict(doc))
  return jsonify({'result' : output})

@app.route('/place/<scene_id>')
def place_data(scene_id):
  """ get data for a specific scene """
  place = mongo.db.places.find_one({'_id': bson.ObjectId(oid=scene_id)})
  return jsonify({'result' : _doc_as_dict(place)})

@app.route('/search/<term>')
def query_place_collection(term):
  """ get places where author or title or location name contain search term. """
  query_exp = re.compile('^{}'.format(term), re.IGNORECASE)
  query_filter = {
      '$or':[
          {'author': query_exp},
          {'title': query_exp},
          {'scenelocation': query_exp}]}
  places = mongo.db.places.find(query_filter)
  places_json = []
  _ = [places_json.append({'place': _doc_as_dict(place)}) for place in places]
  return jsonify({'result': places_json})

@app.route('/')
def index():
  ''' home page '''
  return render_template('index.html')

@app.errorhandler(500)
def server_error(error):
  ''' oops '''
  # Log the error and stacktrace.
  logging.exception('An error occurred during a request. %s', (error))
  return 'An internal error occurred.', 500
