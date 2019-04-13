var express = require('express');
var router = express.Router();

/* Default Admin route */
router.get('/asd', function(req, res, next) {
  res.send('respond admin with a resource');
});

module.exports = router;
