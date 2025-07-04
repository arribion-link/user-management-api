const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT;

//importing the controller Routers
const userRouter = require('./src/routes/user.Router');

// // Application-level middleware
// app.use((req, res, next) => {
//     console.log('Application-level middleware.');
//     console.log(`Request method: ${req.method}, URL: ${req.url}, Time: ${Date.now()}`);
//     next(); // Proceed to the next middleware
// });


//routes
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


