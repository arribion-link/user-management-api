const express = require('express');
const path = require('path');
const {createUser} = require('../controllers/user.controller')

const userRouter = express.Router();

//get the home page
userRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
} );
  
//get the sign up to create an account
userRouter.get('/sign_up', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'register.html'));
});

//register get the login page
userRouter.get('/sign_in', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'login.html'));
});


//sign up
userRouter.post('/sign_in', createUser);


module.exports = userRouter;