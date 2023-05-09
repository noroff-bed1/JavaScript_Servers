var express = require('express');
var router = express.Router();
const path = require('path');
router.use(express.static(path.join(__dirname, '..')));

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

