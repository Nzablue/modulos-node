const chalk = require ('chalk')
const express = require ('express') //importar express
const app = express(); //crear app express
const puerto = 3000; //puerto de escucha 

app.get('/saludar/:nombre/:apellido', (req, res) => {
    const nombre = req.params.nombre
    const apellido = req.params.apellido
    res.send('Hola, ' + nombre + ' ' + apellido);
    });

    app.get('/despedir', (req, res) => {
    const nombre = req.query.nombre;
    const apellido = req.query.apellido;
    res.send('Adios, ' + nombre + ' ' + apellido);
    });


app.listen(puerto, () => {
    console.log(chalk.green(`servidor escuchando en http://localhost:${puerto}`))
});