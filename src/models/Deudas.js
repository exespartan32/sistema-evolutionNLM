const moongose = require('mongoose');
const {Schema} = moongose

const deudaSchema = new Schema({
    nombreAlumno: {
        type: String,
        required: true
    },
    apellidoAlumno:{
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
    }
})

module.exports = moongose.model('Deudas', deudaSchema)