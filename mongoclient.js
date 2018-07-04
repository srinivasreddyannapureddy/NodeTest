


var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var express = require('express');
var app2 = express();
var str = "";

app2.route('/Employeeid').get(function (req, res){

mongoClient.connect(url, function (err, database){
    if (err)
      console.log('error = '+err);
      
    var db = database.db('admin');
    var cursor = db.collection('Employee').find();

    //noinspection JSDeprecatedSymbols;
    
    //cursor.each(function(err, doc){
      //console.log(doc);
    //});

    cursor.forEach(function(item){
      str = str + item.Employeeid+","+item.EmployeeName;
    }, function (err){
      console.log("error="+err);
      res.send(str);
      database.close();
    });
    console.log('connected');
  });
});

var server = app2.listen(8080, function(){});