const userService = require('../service/userService')

class UserController {
    registerUser = (req, res) => {
        const userDetails = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailId: req.body.emailId,
            password: req.body.password,
        };
        userService.registerUser(userDetails, (error, data) => {
            if (error) {
                return res.status(400).send({
                    success: false,
                    message: error,
                });
            } else {
                return res.status(201).send({
                    success: true,
                    message: data,
                });
            }
        })
    }

}

module.exports = new UserController();