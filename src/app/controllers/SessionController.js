const User = require('../models/User').User
// bcrypt import
const bcrypt = require('bcrypt')
// jwt import
const jwt = require('jsonwebtoken')

/**
 * Session Controller
 */
exports.SessionControllers = new class {
    async store(req, res) {
        const user = await User.create(req.body)

        await user.save()
            .then(async () => {
                const token = await user.generateToken()

                res.status(201).json({
                    user,
                    token
                })
            })
            .catch(err => {
                throw err
            })
    }

    async authenticate(req, res) {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
            .then(async () => {
                if (!user) {
                    return res.status(401).json({
                        error: 'Login Failed! Check Authentication credentials'
                    })
                }

                const token = await user.generateToken()
                res.status(200).json({
                    user,
                    token
                })
            })
            .catch(err => {
                throw err
            })
    }
}