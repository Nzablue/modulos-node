const chalk = require ('chalk')
const express = require ('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const MONGODB_URI = 'mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/naza'

const conectarDB = async () => {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log(chalk.blue('¡¡Conectado a la base de datos EXITOSAMENTE!!'));
    } catch (error) {
        console.error(chalk.red('Error conectando a mongoDB:', error.message));
        process.exit(1);
    }
}

conectarDB();

const Tarea = require('./modelos/tarea');

app.post('/tareas', async (req, res) => {
    const nombre = req.body.nombre;



const tarea = {
    nombre: nombre
}

   const nuevaTarea = new Tarea(tarea)

   const tareaGuardada = await nuevaTarea.save()

    res.send(tareaGuardada);
});

app.get('/tareas', async (req, res) => {
   const tareas = await Tarea.find()
   res.send(tareas);
})

app.put('/tareas/:id', async (req, res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;

    if (!id) {
        return res.send(chalk.red('debes enviar el id'))
    }

    const tarea = {
    nombre: nombre
}

    const tareaActualizada = await Tarea.findByIdAndUpdate(id, tarea, {new: true});

    if (!tareaActualizada) {
        return res.send(chalk.red('la tarea no existe'))
    }
    res.send(tareaActualizada);
})


app.delete('/tareas/:id', async (req, res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;

    if (!id) {
        return res.send(chalk.red('debes enviar el id'))
    }

    const tarea = await Tarea.findByIdAndDelete(id);
    
    res.send(tarea);
})

app.listen(3000, () => {
    console.log(`servidor escuchando en http://localhost:3000`)
});
