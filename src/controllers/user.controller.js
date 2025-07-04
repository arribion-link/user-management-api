require('dotenv').config()
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');

const jwt_secret = process.env.JWT_SECRET

const createUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.send("All fields are required");
    }

    const newUser = (
        {
            name,
            email,
        }
    );
    
    //saving the new user
    try {
        await newUser.save()
    } catch {
        const error = new Error("Error! something went wrong.");
        return nextTick(error);
    }

    //signing token to the new user
    try {
        let token = jwt.sign(newUser, jwt_secret, { expiresIn: '1h' });
    } catch {
        const error = new Error("Error! something went wrong.");
        return next(error);
    }

    res.status(200).json(
        {
            sucess: "true",
            data: {
                userId: newUser.id,
                email: newUser.email,
                token: token,
            }
        }
    );
}

//connecting to a database
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/testDB");
        console.log('Database connected successfully...');
    } catch {
        new Error('Error occured connecting to a database');
    }
}

module.exports = {
    createUser,
    connectDB
}