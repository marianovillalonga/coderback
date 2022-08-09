const normalizr = require('normalizr')
const empresa = require('./empresa.json')
const fs = require('fs')

const areaSchema = new normalizr.schema.Entity('area')

const puestoSchema = new normalizr.schema.Entity('puesto')

const empleadoSchema = new normalizr.schema.Entity('empleados', {
    area: areaSchema,
    puesto: puestoSchema
})

const empresaSchema = new normalizr.schema.Entity('empresa', {
    empleados: [empleadoSchema]
})

const denormalizedEmpresa = normalizr.denormalize(empresa, empresaSchema);
fs.promises
    .writeFile('./empresaNormalized.json', JSON.stringify(denormalizedEmpresa, null, 2))
    .then(_ => console.log('ok'))
    .catch(err => console.log(err))
