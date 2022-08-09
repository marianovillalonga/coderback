const { options } = require('./db/mysql')
const knex = require('knex')(options)

knex.from('articulos ')
 .select('name', 'precio', 'stock')
 .then(articulos  => {
   console.log(`Total de articulos : ${articulos .length}`)
   articulos .forEach(articulos  => console.log(`articulos : ${articulos .name} con precio de $${articulos .price} con un stock de ${articulos .stock}`))
 })
 .catch(err => console.log(`Error: ${err.message}`))
 .finally(() => knex.destroy())

