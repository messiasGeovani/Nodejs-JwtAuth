const User = require('../models/User').User
const bcrypt = require('bcryptjs')

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

    async login(req, res) {
        const { email, password } = req.body
        
        await User.findOne({ email: email })
            .then(async result => {

                const isPasswordMatch = await bcrypt.compare(password, result.password)
                if (!isPasswordMatch) {
                    throw new Error({ error: 'Invalid login credentials' })
                }

                const token = await result.generateToken()
                res.json({ token })
            })
    }
}