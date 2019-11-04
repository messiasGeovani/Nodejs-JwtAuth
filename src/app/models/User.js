const mongoose = require('mongoose')
const Schema = mongoose.Schema

// bcrypt import
const bcrypt = require('bcrypt')

// user model
const User = new Schema({
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
})

// hashing password
User.pre('save', function(next) {
    this.password = bcrypt.haschSync(this.password, 8)
})

exports.User = mongoose.model('User', User)