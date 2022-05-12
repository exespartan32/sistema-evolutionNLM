const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

const deudaSchema = new mongoose.Schema({
    tiket: {
        type: String,
        unique: true,
        required: true
    },
    alumno: {
        type: String,
        required: true
    },
    deuda: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaModificacion: {
        type: Date,
        default: Date.now()
    },
    FechaEliminacion: {
        type: Date,
        default: Date.now()
    },
    usuario:{
        type: String,
        unique: true,
    },
})

const deuda = mongoose.model('Deoda', deudaSchema)
module.exports = deuda;