const mongoose = require('mongoose')

/**
 * Database setup
 */
exports.Db = () => {
    mongoose.connect(
        'mongodb+srv://dev:1234@cluster0-jvwp7.mongodb.net/jwt?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
}