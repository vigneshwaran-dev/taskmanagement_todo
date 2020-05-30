const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : 'Title can\'t be empty',
        maxlength : [30 , 'Make the title a bit pointy']
    },
    note : {
        type : String,
        required : 'Note can\'t be empty'
    },
    date : {
        type : Date,
        required : 'Date can\'t be empty'
    },
    label : {
        type : String,
        required : 'Label can\'t be empty'
    },
    priority : {
        type : String,
        default : 'new'
    },
    user : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Todo', todoSchema);