import bson
import re

from flask_pymongo import PyMongo


class DBConnection(object):

  def __new__(cls, app=None):
    if not hasattr(cls, 'instance'):
      cls.instance = super(DBConnection, cls).__new__(cls)
    return cls.instance

  def __init__(self, app=None):
    self.mongo = PyMongo(app)


class QueryResultsProvider(object):
  """
  Facade interface to database reads.

  Supports two types of query methods: proximity, keyword
  Proximity results return a fixed count of results provided a geo point.
  Keyword queries should return results matching from data in text properties
  But some keyword queries are proximity queries?
  """

  def __init__(self, app=None):
    self.connection = DBConnection(app)

  def get_nearest_results(self, lng=None, lat=None):
    """ return places near given coordinates """
    query = {'loc': {'$geoWithin': {'$center': [[float(lng), float(lat)], 0.5]}}}
    places = self.connection.mongo.db.places.find(query)
    return places

  def get_keyword_results(self, search_term=None):
    """ places where author or title or contains search term. """
    query_exp = re.compile('{}'.format(search_term), re.IGNORECASE)
    query_filter = {
      '$or': [
          {'author': query_exp},
          {'title': query_exp},
          {'scenelocation': query_exp}
      ]
    }
    places = self.connection.mongo.db.places.find(query_filter)
    return places

  def get_place_data(self, scene_id=None):
    """ get data for a specific scene """
    place = self.connection.mongo.db.places.find_one(
      {'_id': bson.ObjectId(oid=scene_id)})
    return place
