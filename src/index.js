const express = require('express')

class App {
    constructor() {
        /**
         * starting the express app
         */
        this.express = express()

        /**
         * starting the methids
         */
        this.middlewares()
        this.routes()
    }

    middlewares() {
        // json body support config
        this.express.use(express.json())
    }

    routes() {
        // routes config
        const routes = require('./routes').Routes
        this.express.use(routes)
    }
}

// exporting the app object
exports.App = new App().express