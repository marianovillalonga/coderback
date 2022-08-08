const { options } = require('./db/mysql')
const knex = require('knex')(options)

const categories = [
 { name: 'Bebidas'},
 { name: 'Snack'},
 { name: 'Cereal'},
 { name: 'Dulces'},
 { name: 'Pan'},
 { name: 'Bebidas Alcoholicas'},
 { name: 'Tortas'},
 { name: 'Cigarros'},
 { name: 'Mermeladas'},
 { name: 'Hamburguesas'},
]

knex('categories')
 .insert(categories)
 .then(() => console.log('Categorías insertadas'))
 .catch(err => console.log(`Error: ${err.message}`))
 .finally(() => knex.destroy())
