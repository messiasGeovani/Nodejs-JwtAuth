const express = require('express');
const app = express();
// cors
const cors = require('cors')

// routes
const routes = require('./routes').Routes

app.use(express.json())
// cors activate
app.use(cors())
// routes activate
app.use(routes)

exports.App = app