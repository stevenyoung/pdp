"""
setup application
import json into db
"""

import json
import pymongo

# read json
with open('data/dump-nov2016.json', 'r') as f:
  PLACEDATA = f.read()

PLACES_JSON = json.loads(PLACEDATA)

CLIENT = pymongo.MongoClient()  # db client
DB = CLIENT['pdp-nov2016']  # connect to/create db
PLACES = DB.places  # select/create collection

for scene in PLACES_JSON:
  location = scene['location']
  scene['loc'] = {'type': 'Point', 'coordinates': [location['longitude'],
                                                   location['latitude']]}
  result = PLACES.insert_one(scene)
  print(result.inserted_id)

#create a geospatial index
PLACES.create_index([('loc', pymongo.GEOSPHERE)])
