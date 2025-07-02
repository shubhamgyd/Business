const mongoose = require("mongoose");

const connectDB = () => mongoose.connect("mongodb+srv://shubhamyadav97660:qeJWf2uGkiyiTFbw@cluster0.pqhsdnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Connected To MongoDB"))
    .catch(err => console.log(err.message))

module.exports = connectDB;