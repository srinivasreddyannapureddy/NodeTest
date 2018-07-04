var Promise = require('promise');
var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var express = require('express');
var app3 = express();


mongoClient.connect(url).then(function(database){
   
    var db = database.db('admin');
    db.collection("Employee").updateOne({"EmployeeName": "Joe"}, 
        {$set: {"EmployeeName" : "Jack"}
    });
    database.close();
});