const express = require('express');
const ProductsControllers = require('./app/controllers/ProductsController');
const routes = express.Router();

routes.get('/', function (req, res) {
  return res.render('home/index.njk');
});

routes.get('/products/create', ProductsControllers.create);
routes.post('/products', ProductsControllers.post);

routes.get('/ads/create', function (req, res) {
  return res.rendirect('/products/create');
});

module.exports = routes;
