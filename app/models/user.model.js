const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    password: String
}, {
    timestamps: true,
    versionKey: false
});

const User = mongoose.model('User', UserSchema);

class UserModel {
    registerUser = (req, res) => {
        const userInfo = new User({
            firstName: req.firstName,
            lastName: req.lastName,
            emailId: req.emailId,
            password: req.password
        });
        userInfo.save({}, (error, data) => {
            if (error) {
                return res(error, null)
            } else {
                return res(null, data)
            }
        })

    }

}

module.exports = new UserModel();