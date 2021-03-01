var express = require('express');
var router = express.Router();

// lets handle here all the route=>pages that are generic :
// home, about, contact, CGV/CGU, 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Ironhack' });
});

module.exports = router;
