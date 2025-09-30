const chalk = require ('chalk')

console.log(chalk.magenta('Tarea Hecha por: Nazareno, Santiago, Efrain y Martha (Grupo 2)'));

console.log(chalk.blue('Empezemos con las Tareas!!!!'));

let tareas = [] //Creación de una Lista
console.log(chalk.green(tareas));
console.log(chalk.yellow(tareas.length));

tareas[0] = "Tender la Cama"
console.log(chalk.green(tareas));
console.log(chalk.yellow(tareas.length));

tareas.push(" Hacer la Tarea") //Agregar Elemento
console.log(chalk.green(tareas));
console.log(chalk.yellow(tareas.length)); //Cantidad de Elementos

function addTask(Task) {
    tareas.push(Task)
}
addTask(" Limpiar la Cocina")
console.log(chalk.green(tareas));
console.log(chalk.yellow(tareas.length)); //Cantidad de Elementos

function removeTask(Task) {
    let index = tareas.indexOf(Task)
    if (index !== 0) {
        tareas.splice(index, 1)
    }
}
removeTask(" Hacer la Tarea")
console.log(chalk.green(tareas));
console.log(chalk.yellow(tareas.length)); 
function removeTask(Task) {
    let index = tareas.indexOf(Task)
    if (index !== 0) {
        tareas.splice(index, 1)
    }
}
removeTask(" Limpiar ka Cocina")
console.log(chalk.green(tareas));
console.log(chalk.yellow(tareas.length)); 

console.log (chalk.red ('Me despido de ti, me voy :('))