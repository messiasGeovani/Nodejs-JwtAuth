const mongoose = require('mongoose')
const Schema = mongoose.Schema

// bcrypt import
const bcrypt = require('bcrypt')
// jwt import
const jwt = require('jsonwebtoken')

// user model
const User = new Schema({
    // _id: Schema.Types.ObjectId,
    email: {
        type: String,
        // trim: true,
        // required: true
    },
    password: {
        type: String,
        // trim: true,
        // required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
        timestamps: true
    })

// hashing password
User.pre('save', async function(next) {
    // hashing the password
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

// generate token method
User.methods.generateToken = async function() {
    // generating the token
    const user = this
    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

exports.User = mongoose.model('User', User)