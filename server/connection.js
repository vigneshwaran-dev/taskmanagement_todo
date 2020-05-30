const mongoose= require('mongoose');

const mongoOptions = {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

mongoose.connect(process.env.MONGO_URL, mongoOptions).
    then(() => {
        console.log('MongoDB connected');
    },(err) => {
        console.log('Mongoose connection error: ' + err.message);   
    }
);

const todoSchema = require('./models/todoModel');
const userSchema = require('./models/userModel');

module.exports = mongoose;