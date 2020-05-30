const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : 'Email already exist',
        required : 'Email can\'t be empty'
    },
    name : {
        type : String,
        required : 'Name can\'t be empty'
    },
    password : {
        type : String,
        required : 'Password can\'t be empty'
    },
    image : {
        type : String,
        default : 'images/default-girl.png'
    }
});

module.exports = mongoose.model('User', userSchema);