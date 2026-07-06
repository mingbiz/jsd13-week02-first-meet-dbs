use("sample_mflix");

db.movies.find({"location.address.state": "AL"}).count();
