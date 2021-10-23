const express = require('express');
const ProductsControllers = require('./app/controllers/ProductsControllers');
const routes = express.Router();

routes.get('/', function (req, res) {
  return res.render('layout.njk');
});

routes.get('/products/create', ProductsControllers.create);

routes.get('/ads/create', function (req, res) {
  return res.rendirect('/products/create');
});

module.exports = routes;
