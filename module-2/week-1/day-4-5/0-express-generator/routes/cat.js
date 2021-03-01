var express = require('express');
var router = express.Router();

// let's write all the routes dedicated to user as a theme/categorye

/* GET users listing. */

// in a router when u see a route that is ONLY / =>
// it's equal to the prefix 

router.get('/', function(req, res, next) {
  res.send('meow');
});

router.get('/ugly', function(req, res, next) {
  res.send('i still love you');
});

router.get('/cute', function(req, res, next) {
  res.send('awwwwn');
});

router.get('/cute/kids', function(req, res, next) {
  res.send('awwwwn le chaton');
});

module.exports = router;
