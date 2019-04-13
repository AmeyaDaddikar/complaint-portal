var express = require('express');
var router = express.Router();

/* Default Engineer route */
router.get('/eee', function(req, res, next) {
  res.send('respond engg with a resource');
});

module.exports = router;
