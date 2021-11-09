const express = require('express');
const routes = express.Router();

// const SessionController = require('../app/controllers/SessionController.js');
const UserController = require('../app/controllers/UserController.js');

const Validator = require('../app/validators/user');

// Login/Logout
// routes.get('/login', SessionController.loginForm);
// routes.get('/login', SessionController.login);
// routes.get('/logout', SessionController.logout);

// Reset password /forgot
// routes.get('/forgot-password', SessionController.forgotPassword);
// routes.get('/password-reset', SessionController.resetPassword);
// routes.post('/forgot-password', SessionController.forgotPassword);
// routes.post('/password-reset', SessionController.resetPassword);

// user register UserController
routes.get('/register', UserController.registerForm);
routes.post('/register', Validator.post, UserController.post);

routes.get('/', UserController.show);
// routes.put('/', UserController.update);
// routes.delete('/', UserController.delete);

module.exports = routes;
