
var express = require('express');

var app1 = express();

app1.get('/', function (req, res){
        res.send('Hello World!!');
        
        
});

app1.post('/x', function (req, res){
        res.send('Hello World!!!!');
});

var server = app1.listen(3000, function(){});