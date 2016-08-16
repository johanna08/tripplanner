var express = require('express');
var router = express.Router();


//get index.html
router.get('/', function (req, res, next) {
  res.render('index');
});

