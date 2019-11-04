const routes = require('express').Router()

// session middleware
const SessionController = require('./app/controllers/SessionController').SessionControllers

/**
 * Creating the routes
 */
routes.post('/session', SessionController.store)
routes.post('/authenticate', SessionController.authenticate)

exports.Routes = routes