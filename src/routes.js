const routes = require('express').Router()

// session middleware
const SessionController = require('./app/controllers/SessionController').SessionControllers

/**
 * Creating the routes
 */
routes.post('/user', SessionController.store)
routes.post('/login', SessionController.login)

exports.Routes = routes