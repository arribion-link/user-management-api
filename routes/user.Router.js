const router = require('express');
const path = require('path');
const userControllers = require('../src/controllers/user.controller')

const userRouter = router();

//get the home page
userRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

//get the sign up to create an account
userRouter.get('/sign_up', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'signup.html'));
});

//get the sign to log in to your account
userRouter.get('/sign_in', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});


//post the data

module.exports = userRouter;