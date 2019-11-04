const routes = require('express').Router()

// session middleware
const SessionController = require('./app/controllers/SessionController').SessionControllers

/**
 * Creating the routes
 */
routes.post('/session', SessionController.store)

exports.Routes = routes