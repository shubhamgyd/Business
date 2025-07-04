const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => mongoose.connect(`mongodb+srv://shubhamyadav97660:${process.env.MongoPassword}@cluster0.pqhsdnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("Connected To MongoDB"))
    .catch(err => console.log(err.message))

// const connectDB = () => mongoose.connect("mongodb://localhost:27017/business")
//     .then(() => console.log("Connected To MongoDB"))
//     .catch(err => console.log(err.message))



module.exports = connectDB;