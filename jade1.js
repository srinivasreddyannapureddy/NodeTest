var express = require('express');

var app2 = express();

app2.set('view engine', 'jade');

app2.get('/', function (req, res){
    res.render('index', {title1:'Guru99', message1:'Welcome'})
});

var server = app2.listen(3000, function () {});