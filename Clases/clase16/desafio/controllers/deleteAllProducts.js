const { options } = require('./db/mysql')
const knex = require('knex')(options)

knex.from('articulos ')
 .del()
 .then(articulos  => {
   console.log(`articulos  eliminados: ${articulos }`)
 })
 .catch(err => console.log(`Error: ${err.message}`))
 .finally(() => knex.destroy())