const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
    name: String,
    size: String,
    imageUrl: String,
})

module.exports = mongoose.model("Furniture", furnitureSchema);