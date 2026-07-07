use("sample_mflix");
db.movies.find({}).sort({ runtime: -1 }).limit(5);
db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5);
db.movies.find({ released: { $gte: ISODate("1990-01-01T00:00:00Z"), $lt: ISODate("2001-01-01T00:00:00Z") } }).count();
