const db = requiere('../db')
const alumnoModel = require('./models/alumnos')

db
 .then(_ => alumnoModel.find({}))
 .then(alumnos => console.log(alumnos))
 .catch(err => console.error(`Error: ${err.message}`))
 .finally(_ => process.exit())