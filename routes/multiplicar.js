var express = require('express');
var router = express.Router();
var {multiplicar} = require('../helpers/multiplicar');

// Ruta para renderizar la vista multiplicar
router.get('/', function(req, res) {
    res.render('multiplicar');
});
router.post('/', async (req, res) => {
  let number = await multiplicar(req.body.base);
  res.render('tabla', { base: number });
});


module.exports = router;
