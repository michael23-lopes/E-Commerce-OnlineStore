const express = require('express');
const routes = express.Router();

const { onlyUsers } = require('../app/middlewares/session');

const CartController = require('../app/controllers/CartController.js');

routes
  .get('/', onlyUsers, CartController.index)
  .post('/:id/add-one', onlyUsers, CartController.addOne)
  .post('/:id/remove-one', onlyUsers, CartController.removeOne)
  .post('/:id/delete', onlyUsers, CartController.delete);

module.exports = routes;
