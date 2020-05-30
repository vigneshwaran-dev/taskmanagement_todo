const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const fs = require('fs');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const User = mongoose.model("User");

const storage = multer.diskStorage({
  destination : (req, file, cb) => {
      cb(null, './images');
  },

  filename : (req, file, cb) => {
      var filename = uuidv4() + new Date().getMilliseconds() + new Date().getSeconds();
      if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg')
        cb(null, filename+'.jpeg');
      else if(file.mimetype === 'image/png')
        cb(null, filename+'.png');
      else
        cb(new Error('Invalid Format'));
  }
});

const upload = multer({
  storage : storage,
  limits : { fileSize : 1024 * 1024 * 2 }
});

module.exports.registerUser = (req, res) => {
  var user = new User();

  user.email = req.body.email;
  user.name = req.body.name;
  user.password = bcrypt.hashSync(req.body.password, 10);

  user.save((err) => {
    if(!err){
        var token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.status(200);
        res.json({
            title : 'Signup Success',
            token : token
        });
    }
    else{
      res.status(500);
      res.json(err);
    }
  });
};

module.exports.loginUser = (req, res) => {
  User.findOne({email : req.body.email}, (err, user) => {
    if(err){
      res.json(err);
      res.status(500);
    }

    else if(!user){
      res.status(401);
      res.json({
        title : 'Email not found',
        error : 'Invalid Credentials'
      });
    }

    else if( !bcrypt.compareSync(req.body.password, user.password) ){
      res.status(401);
      res.json({
        title : 'Login Failed',
        error : 'Incorrect Password'
      })
    }
    
    else{
      var token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      res.status(200);
      res.json({
        title : 'Login Sucess',
        token : token
      }); 
    }
  })
};

module.exports.getInfo = (req, res) => {
  jwt.verify(req.params.token, process.env.JWT_SECRET, (err, decoded) => {
    if(err){
      res.status(401);
      res.json({
        title : 'Unauthorized'
      });
    }
    else{
      User.findById(decoded.userId, (err, user) => {
        if(!err)
          res.send(user)
        else{
          res.status(500);
          res.json(err);
        }
      });
    }
  })
};

module.exports.updateImage = (req, res) => {
  jwt.verify(req.params.token, process.env.JWT_SECRET, (err, decoded) => {
    if(err){
      res.status(401);
      res.json({
        title : 'Unauthorized'
      });
    }
    else{
      User.findById(decoded.userId , (err, user) => {
        if(user.image !== 'images/default-boy.png' && user.image !== 'images/default-girl.png'){
          try {
            fs.unlinkSync(user.image);
          }
          catch(err) {
            console.log(err.message);
          }
        }
        
        User.findByIdAndUpdate(decoded.userId, { image : req.body.image}, (err, user) => {
          if(err){
            res.status(500);
            res.json(err);
          }
          else
            res.send(user);
        });
      });
    }
  });
};

module.exports.preUpdateImageFile = upload.single('image');

module.exports.updateImageFile = (req, res) => {
  jwt.verify(req.params.token, process.env.JWT_SECRET, (err, decoded) => {
    if(err){
      res.status(401);
      res.json({
        title : 'Unauthorized'
      });
      try {
        fs.unlinkSync(req.file.path);
      }
      catch(err) {
        console.log(err.message);
      }
    }
    else{
      User.findById(decoded.userId , (err, user) => {
        if(user.image !== 'images/default-boy.png' && user.image !== 'images/default-girl.png'){
          try {
            fs.unlinkSync(user.image);
          }
          catch(err) {
            console.log(err.message);
          }
        }
          
        User.findByIdAndUpdate(decoded.userId, { image : req.file.path}, (err, user) => {
          if(err){
            res.status(500);
            res.json(err);
          }
          else
            res.send(user);
        });
      });
    }
  });
};

module.exports.updateName = (req, res) => {
  jwt.verify(req.params.token, process.env.JWT_SECRET, (err, decoded) => {
    if(err){
      res.status(401);
      res.json({
        title : 'Unauthorized'
      });
    }
    else{
      User.findByIdAndUpdate(decoded.userId , {name : req.body.name}, (err, user) => {
        if(err){
          res.status(500);
          res.json(err);
        }
        else
          res.send(user)
      });
    }
  });
};

module.exports.updatePassword = (req, res) => {
  jwt.verify(req.params.token, process.env.JWT_SECRET, (err, decoded) => {
    if(err){
      res.status(401);
      res.json({
        title : 'Unauthorized'
      });
    }
    else{
      User.findByIdAndUpdate(decoded.userId , {password : bcrypt.hashSync(req.body.password, 10)}, (err, user) => {
        if(err){
          res.status(500);
          res.json(err);
        }
        else
          res.send(user)
      });
    }
  });
}