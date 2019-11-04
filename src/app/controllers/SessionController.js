const User = require('../models/User').User

/**
 * Session Controller
 */
exports.SessionControllers = new class {
    async store(req, res) {
        const { email, password } = req.body

        // getting a data
        const user = User.findOne({ where: { email } })

        // checking the user
        if (!user) {
            res.status(404).json({
                message: 'User not found'
            })
        }

        // checking the password
        if (!password) {
            resstatus(404).json({
                message: 'Invalid password'
            })
        }

        return res.json({
            user,
            token: user.generateToken()
        })
    }
}