var express = require('express');
var router = express.Router();
var {multiplicar} = require("../helpers/multiplicar")
;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res) {
  res.render('multiplicar');
});


router.post('/', async (req, res) => {
  const base = req.body.base;
  const resultado = await multiplicar(base);
  res.render('tabla', { base, resultado });
});

module.exports = router;
