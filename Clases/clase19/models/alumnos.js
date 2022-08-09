const { Schema, model } = require('mongoose')

const alumnosSchema = new Schema({
 nombre: { type: String, required: true, max: 100 },
 apellido: { type: String, required: true, max: 100 },
 edad: { type: Number, required: true, max: 100 },
 dni: { type: Number, required: true, max: 100 },
 curso: { type: String, required: true, max: 100 },
 nota: { type: Number, required: true, max: 100 }
})

module.exports = model('Alumnos', alumnosSchema)