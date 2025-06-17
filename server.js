const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT;

//importing the controller Routers
const userRouter = require('./routes/user.Router');


app.use('/', userRouter);


//connecting a port
app.listen(port, (e) => {
    if (e) {
        console.log('Error', e);
    } else {
        console.log('app running successfully')
        console.log(`http://127.0.0.1:${port}`); 
    }
})


