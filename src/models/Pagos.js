//const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
    /*tiket: {
        type: String,
        unique: true,
        required: true
    },*/
    nombreAlumno: {
        type: String,
        required: true
    },
    apellidoAlumno:{
        type: String,
        required: true
    },
    pagoMonto: {
        type: Number,
        required: true
    },
    pagoMes: {
        type: String,
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
    /*usuario:{
        type: String,
        unique: true,
    },*/
})

const pago = mongoose.model('Pago', pagoSchema)
module.exports = pago;