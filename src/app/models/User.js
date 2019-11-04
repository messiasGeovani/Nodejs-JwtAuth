const Schema = require('mongoose').Schema
const ObjectId = Schema.Types.ObjectId

// jwt import
const jwt = require('jsonwebtoken')

// user model
exports.User = new Schema({
    _id: ObjectId,
    email: String,
    password: String
})

// generate token function
User.prototype.generateToken = function() {
    return jwt.sign(
        {
            id: this.id
        }
    )
}