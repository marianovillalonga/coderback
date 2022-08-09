const { options } = require('./db/mysql')
const knex = require('knex')(options)

knex.from('articulos ')
 .where('stock', 21)
 .update({ stock: 25 })
 .then(articulos  => {
   console.log(`articulos  actualizados: ${articulos }`)
 })
 .catch(err => console.log(`Error: ${err.message}`))
 .finally(() => knex.destroy())