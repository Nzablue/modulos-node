const chalk = require ('chalk')
const express = require ('express') //importar express
const app = express(); //crear app express
const puerto = 3000; //puerto de escucha 

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});


app.listen(puerto, () => {
    console.log(chalk.green(`servidor escuchando en http://localhost:${puerto}`))
});