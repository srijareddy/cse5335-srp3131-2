var mongoose = require('mongoose');


mongoose.connect('mongodb://srija:srija@ds013901.mlab.com:13901/heroku_r1s7tdsw');
var conn = mongoose.connection;

conn.on('error', function(err){
    
    console.log('Connection error', err);
    });
conn.once('open', function(){
    
    //console.log('Connected...');
    });



console.log('Collection created and data inserted successfully...');