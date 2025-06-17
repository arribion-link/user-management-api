// const { stringify } = require('querystring');
// const { name } = require('ejs');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    console.log('applicatoin unable to pull mongodb url from enviroment variables');
} else {
    console.log('mongo_url pulled successfully');
}

//connecting to database
const connectDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URL);
    } catch (err) {
        console.log('Error connecting to database');
    }
}
//defining the inferences



//creating a database schema

const userSchema = mongoose.Schema(
    {
        name: String,
        email: String,
        Password: String
    }
);


//creating database model

let database = mongoose.model('userSchema', connectDB);


module.exports = database;




