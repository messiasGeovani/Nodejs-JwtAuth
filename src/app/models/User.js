const Schema = require('mongoose').Schema
const ObjectId = Schema.Types.ObjectId

// user model
exports.User = new Schema({
    _id: ObjectId,
    email: String,
    password: String
})