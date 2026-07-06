use("sample_mflix");

db.movies.find({"location.address.state": "AL"}).count();
db.theaters.findOne({ "location.address.city": "La Quinta" })
