const User = require('../models/User').User
// bcrypt import
const bcrypt = require('bcrypt')
// jwt import
const jwt = require('jsonwebtoken')

/**
 * Session Controller
 */
exports.SessionControllers = new class {
    async store(req, res, next) {
        const { email, password } = req.body

        // creating an user
        await User.create({
            email,
            password
        }, function(err, result) {

            if (err) {
                next(err)
            } else {
                res.status(200).json({
                    message: 'Success'
                })
            }

        })
    }

    async authenticate(req, res, next) {
        const { email, password } = req.body

        // authenticating an user
        await User.findOne({
            email,
            password
        }, function(err, userInfo) {

            if (err) {
                next(err)
            } else {

                if (bcrypt.compareSync(password, userInfo.password)) {
                    const token = jwt.sign(
                        {
                            id: userInfo._id
                        },
                        req.app.get('secretKey'),
                        {
                            expiresIn: '1h'
                        }
                    )

                    res.status(200).json({
                        user: userInfo,
                        token: token
                    })
                } else {
                    res.json({
                        message: 'Invalid Password/email'
                    })
                }

            }
        })
    }
}