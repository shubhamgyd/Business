const express = require("express");
const connectDB = require("./config");
const furnitureRoutes = require("./routes/furniture");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/furniture", furnitureRoutes);

connectDB()

app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Server is running on", PORT);
    }
})