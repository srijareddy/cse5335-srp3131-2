var mc = require('mongodb').MongoClient;
// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://sreeteja:teja123@ds033153.mongolab.com:33153/heroku_w41twx8r", function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('earths');
  
  var  dc =   collection.find();
   console.log(dc);
});
