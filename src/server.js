const app = require('./').App

const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://dev:1234@cluster0-jvwp7.mongodb.net/jwt?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

// starting the server
app.listen(3000)
console.log('Server is running at 3000')