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

//Job schema
const jobSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: [true, "Du måste fylla i företagsnamn."]
    },
    jobtitle: {
        type: String,
        required: [true, "Du måste fylla i jobbtitel."]
    },
    location: {
        type: String,
        required: [true, "Du måste fylla i plats."]
    },
    description: {
        type: String,
        required: [true, "Du måste fylla i beskrivning."]
    }
});

const Job = mongoose.model("Job", jobSchema);

//Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/api", (req, res) => {
    res.json({ message: "Välkommen till mitt API" })
});

//GET-rout
app.get("/jobs", async(req, res) => {
    try {
        let result = await Job.find({});

        return res.json(result);
    } catch(error) {
        //Errorhantering
        return res.status(500).json(error);
    }
});

//POST-rout
app.post("/jobs", async(req, res) => {
    try {
        let result = await Job.create(req.body);
        
        return res.json(result);
    } catch(error) {
        //Errorhantering
        return res.status(400).json(error);
    }
});

//PUT-rout
app.put("/jobs/:id", async(req, res) => {
    try {
        const jobId = req.params.id;
        const updatedJob = req.body;

        const result = await Job.findByIdAndUpdate(jobId, updatedJob, {new: true});
        
        return res.json(result);
    } catch(error) {
        //Errorhantering
        return res.status(400).json(error);
    }
});

//DELETE-rout
app.delete("/jobs/:id", async(req, res) => {
    try {
        const jobId = req.params.id;

        const result = await Job.findByIdAndDelete(jobId);
        
        return res.json(result);
    } catch(error) {
        //Errorhantering
        return res.status(400).json(error);
    }
});