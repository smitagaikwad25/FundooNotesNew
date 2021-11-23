
const userController = require('../controller/user');

module.exports = (app) => {
    app.post('/create', userController.registerUser);
}