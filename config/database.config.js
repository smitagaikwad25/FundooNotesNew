
const mongoose = require('mongoose');
require('dotenv').config()

const dbconnect = () => {
    mongoose.connect(process.env.DB_URl, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    })
}
module.exports = dbconnect
