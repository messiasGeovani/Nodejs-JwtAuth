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
        try {
            const user = new User(req.body)
            await user.save()
            const token = await user.generateToken()

            res.status(201).json({
                user,
                token
            })
        } catch (error) {
            res.status(400).json(error)
        }
    }

    async authenticate(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findByCredentials(email, password)
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
        } catch (error) {
            res.status(400).json(error)
        }
    }
}