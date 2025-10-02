const mongoose = require('mongoose');

const tareaSchema = mongoose.Schema({
    nombre: {
        type: String,
    },
})

module.exports = mongoose.model('Tarea', tareaSchema);