const mongoose = require("mongoose");
const imageModel = require("./models/imageModel.js");
const multer = require("multer");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const router = express.Router();

router.post(upload.single(), (req, res) => {
    imageModel.insertMany()
})