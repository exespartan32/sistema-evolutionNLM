const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
    tiket: {
        type: String,
        unique: true,
        required: true
    },
    alumno: {
        type: String,
        required: true
    },
    pago: {
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

const pago = mongoose.model('Pago', pagoSchema)
module.exports = pago;