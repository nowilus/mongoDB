db.people.find({"weight":{$gt:"68", $lte:"71,5"}}).pretty().toArray()