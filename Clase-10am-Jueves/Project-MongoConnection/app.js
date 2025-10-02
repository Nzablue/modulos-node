const chalk = require('chalk');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const MONGO_URL = 'mongodb+srv://nazareyesbaccaro_db_user:Tg8guiEMisOD7Ahd@clusterjc.bdj8tfe.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJC'
mongoose.connect(MONGO_URL)
    .then(() => console.log(chalk.green('MongoDB connected')))
    .catch(err => console.log(chalk.red(err)));

    app.listen(port, () => {
        console.log(chalk.blue(`servidor escuchando en http://localhost:${port}`))
    });

    //modelo skill
    const Skill = mongoose.model("Skill", {
        name: {type: String, required: true},
        level: {type: String, default: "beginner"},
    })
    
    app.post("/skill", async (req, res) => {
        
        try {
            const nuevaSkill = new Skill(req.body); //body = {name: "JS", level: "advanced"}
        await nuevaSkill.save()
           res.status(201).json(nuevaSkill)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    })

     app.get("/skill", async (req, res) => {
        const listSkills = await Skill.find()
        res.status(200).json(listSkills)
     })

     app.get("/skill/:id", async (req, res) => {
        const skill = await Skill.findById(req.params.id)
        
        if(!skill){
            return res.status(404).json({error: "Skill not found"})
        }

        res.status(200).json(skill)
     })

     app.delete("/skill/:id", async (req, res) => {
        const skillEliminada = await Skill.findByIdAndDelete(req.params.id)
        
        if(!skillEliminada){
            return res.status(404).json({error: "Skill not found"})
        }

        res.status(200).json(skillEliminada)
     })

     app.put("/skill/:id", async (req, res) => {
        const skillActualizada = await Skill.findByIdAndUpdate(req.params.id, req.body)
        
        if(!skillActualizada){
            return res.status(404).json({error: "Skill not found"})
        }

        res.status(200).json(skillActualizada)
     })