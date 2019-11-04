const routes = require('express').Router()

// session middleware
const SessionController = require('./app/controllers/SessionController').SessionController

/**
 * Creating the routes
 */
routes.post('/sessions', SessionController.store)