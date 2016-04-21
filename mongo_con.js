var mongoose = require('mongoose');
var prompt = require('prompt');
var converter = require('csvtojson').Converter;
var fs = require('fs');

mongoose.connect('mongodb://srija:srija@ds013901.mlab.com:13901/heroku_r1s7tdsw');
var conn = mongoose.connection;

conn.on('error', function(err){
    
    console.log('Connection error', err);
    });
conn.once('open', function(){
    
    console.log('Connected...');
    });

var csvfile = 'sample.csv';
var csv_con = new converter();

fs.createReadStream(csvfile).pipe(csv_con);


csv_con.on("end_parsed", function(jsonObj){
    
    conn.collection('test').insert(jsonObj);
    }); 


console.log('Collection created and data inserted successfully...');
var Schema = mongoose.Schema;
var Weather_schema = new Schema({ID : Number, TEMP : Number, PRES : Number, DEWP : Number});

var weather = mongoose.model('weather','Weather_schema' ,'weathers');
