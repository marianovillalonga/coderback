const { options } = require('./db/mysql')
const knex = require('knex')(options)

const articulos  = [
 { name: 'Coca Cola', codigo: 12.22, precio: 'Refresco de Cola', stock: 20},
 { name: 'Palomitas', codigo: 11, precio: 'Palomitas de mantequilla', stock: 9},
 { name: 'Agua mineral', codigo: 10.23, precio: '600 ml', stock: 15},
 { name: 'Arroz inflado', codigo: 18, precio: '200 gr', stock: 8},
 { name: 'Caramelos', codigo: 6, precio: 'Paquete de 6', stock: 21},
]

knex('articulos ')
 .insert(articulos )
 .then(() => console.log('Articulos  insertados'))
 .catch(err => console.log(`Error: ${err.message}`))
 .finally(() => knex.destroy())