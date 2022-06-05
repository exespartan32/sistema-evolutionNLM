const moongose = require('mongoose');
const {Schema} = moongose

const pagoSchema = new Schema({
    nombreAlumno: {
        type: String,
        required: true
    },
    apellidoAlumno:{
        type: String,
        required: true
    },
    pagoAlumno: {
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
})

module.exports = moongose.model('Pagos', pagoSchema)