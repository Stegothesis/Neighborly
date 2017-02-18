'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, '../public')));

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Listening on port:' + port);
});

app.get('/', function(req,res){
  console.log("get happened")
})

module.exports = app;
