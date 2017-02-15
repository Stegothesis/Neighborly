const mongoose = require('mongoose');
const databasepath = 'mongodb://localhost/community';

mongoose.connect(databasepath);
const db = mongoose.connection;

let userSchema = mongoose.Schema({

})

var User = mongoose.model("User", userSchema)

module.exports = User;
