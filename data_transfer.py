# python
import csv
from pymongo import MongoClient
from pprint import pprint

uri = "mongodb+srv://admin:gigemaggies@cluster0.ovubn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
client = MongoClient(uri)

db = client["weather"] # db selected
profileCollection = db["2017"] # collection selected
count = 0
with open('2017.csv') as csvfile:
    dataReader = csv.reader(csvfile)
    for data in dataReader:
        print(data)
        profileCollection.insert_one(
            {"id": data[0],
            "date": data[1], #ex: 20170101 must extract xxxx xx xx 
            "type": data[2], #ex: TMIN, TMAX
            "value": data[3], # value for given type of data, ex: 20 inches of rainfall in one month
            "flag1": data[4],
            "flag2": data[5],
            "flag3": data[6],
            "flag4": data[7]
            })
            
