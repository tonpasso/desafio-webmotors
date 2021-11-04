const express = require('express');
const anuncioController = require('./../controller/anuncioController');

const router = express.Router();

router
  .route('/')
  .get(anuncioController.getAllAnuncio)
  .post(anuncioController.createAnuncio);

router
  .route('/update/:id')
  .put(anuncioController.updateAnuncio);

router
  .route('/delete/:id')
  .delete(anuncioController.excludeAnuncio);

module.exports = router;