'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();
var request = require('request');
var apiHelpers = require('./apihelpers.js');
var db = require('../database/schemas.js');
var dbHelpers = require('./dbHelpers.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// var connectionString = '';

// pg.connect(connectionString, onConnect);

// function onConnect(err, client, done) {
//   if (err) { console.error(err); }
//   console.log('Connected to the DATABASE');
// }

app.use(express.static(path.join(__dirname, '../public')));

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Listening on port:' + port);
});

// app.get('/', function(req,res){
//   console.log("get happened")
// })

//create a new user
app.post('/api/users', function(req, res) {
  var user = {};
  user.username = req.body.username;
  user.hash = req.body.hash;

  dbHelpers.createUser(user, function(created) {
    if(created) {
      res.send('User created');
    } else {
      res.send('User already exists');
    }
  })
})

//get neighorhoods for a given city
app.get('/api/neighborhoods/searchbycity/:city/:state', function(req, res) {
  var city = req.params.city;
  var state = req.params.state;
  apiHelpers.getZillowHoods(city, state, function(err, hoods) {
    if(err) {
      res.sendStatus(404);
    } else {
      //could add our own data here
      res.json(hoods);
    }
  });
});


app.post('/api/neighborhoods/reviews', function(req, res) {
  dbHelpers.addReview(req.body, function(created) {
    if (created) {
      res.send('Review added');
    } else {
      res.send('You have already reviewed this neighborhood');
    }
  })
})

app.get('/api/neighborhoods/reviews/:neighborhood/:city/:state', function(req, res) {
  var query = {
    city: req.params.city,
    state: req.params.state,
    neighborhood_name: req.params.neighborhood
  }
  dbHelpers.getReviews(query, function(data) {
    res.json(data);
  })
})

module.exports = app;
