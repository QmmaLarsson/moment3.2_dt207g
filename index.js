const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
//Aktivera formulärdata
app.use(express.urlencoded({ extended: true }));

//Anslut till databas
mongoose.connect(MONGOURL).then(() => {
    console.log("Datebase is connected successfully.");
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}.`);
    });
}).catch((error) => {
    console.log("Error during connection to database: " + error);
});

//Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/api", (req, res) => {
    res.json({ message: "välkommen till mitt API" })
});