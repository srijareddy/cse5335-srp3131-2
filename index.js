var express = require('express');
var app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
app.get('/p/:tagId', function(req, res) {
  var i= req.params.tagId;
  i = parseInt(i);
  //connection code
  
  var MongoClient = require('mongodb').MongoClient;
      MongoClient.connect("mongodb://srija:srija@ds013901.mlab.com:13901/heroku_r1s7tdsw",function(err, db){
        if(err) throw err;
				
	    db.collection('weathers').findOne({ID:i}, function(err, doc){
        if(err) throw err;
        console.log("Server:"+doc);
		
		res.json(doc)
	    db.close();
     });	 
});

  //connection code

  
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});






