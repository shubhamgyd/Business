const express = require("express");
const multer = require("multer");
const fs = require("fs");
const cloudinary = require("../cloudinary");
const Furniture = require("../models/Furniture");

const router = express.Router();
const upload = multer({dest: "uploads/"});

router.post("/add", upload.single("image"), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);

        const newItem = new Furniture({
            name: req.body.name,
            size: req.body.size,
            imageUrl: result.secure_url,
        });

        await newItem.save();
        res.json(newItem);
    } catch (err) {
        res.status(500).json({error: "Upload failed"});
    }
})

router.get("/all", async (req, res) => {
    const items = await Furniture.find();
    res.json(items);
})

router.get("/mandir", async (req, res) => {
    const items = await Furniture.find({name: {
        $regex: "mandir", $options: "i"}})
    res.json(items);
})

router.get("/shoerack", async (req, res) => {
    const items = await Furniture.find({name: {
        $regex: "shoerack", $options: "i"}})
    res.json(items);
})

router.get("/acrylic-base", async (req, res) => {
    const items = await Furniture.find({name: {
        $regex: "acrylic base", $options: "i"}})
    res.json(items);
})

module.exports = router;