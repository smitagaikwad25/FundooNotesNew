const userModel = require('../models/user.model')

class UserService {
    registerUser = (req, res) => {
        userModel.registerUser(req, (error, data) => {
            if (error) {
                return res(error, null)
            } else {
                return res(null, data)
            }
        })
    }
}

module.exports = new UserService();