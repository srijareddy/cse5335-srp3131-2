var mc = require('mongodb').MongoClient;
// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://srija:srija@ds013901.mlab.com:13901/heroku_r1s7tdsw", function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('earths');
  
  var  dc =   collection.find();
   console.log(dc);
});
