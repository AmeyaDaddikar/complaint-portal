var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('blank_page', { title: 'Express' });
});

/* Signin. */
router.get('/sign-in', function(req, res, next) {
  res.render('sign-in');
});

/* Signup. */
router.get('/sign-up', function(req, res, next) {
  res.render('sign-up');
});


module.exports = router;
