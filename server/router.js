const express = require('express');
const router = express.Router();

const todoCtrl = require('./controllers/todoController');
const userCtrl = require('./controllers/userController');

router.get('/', (req, res) => res.send('<h1>Todo server is running</h1>'));

router.get('/todos/:token', todoCtrl.fetchTodos);
router.post('/todos/:token', todoCtrl.insertTodo);
router.put('/todos/:token', todoCtrl.updateTodo);
router.delete('/todos/:token/:_id', todoCtrl.deleteTodo);

router.post('/register', userCtrl.registerUser);
router.post('/login', userCtrl.loginUser);
router.get('/user/:token', userCtrl.getInfo);
router.put('/user/:token/image/file', userCtrl.preUpdateImageFile, userCtrl.updateImageFile);
router.put('/user/:token/image', userCtrl.updateImage);
router.put('/user/:token/name', userCtrl.updateName);
router.put('/user/:token/password', userCtrl.updatePassword);

module.exports = router;