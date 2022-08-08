const { options } = require('./db/mysql')
const knex = require('knex')(options)

const products = [
 { name: 'Coca Cola', price: 120.22, description: 'Refresco de Cola', stock: 20, category_id: 1 },
 { name: 'Palomitas', price: 110, description: 'Palomitas de mantequilla', stock: 9, category_id: 2 },
 { name: 'Agua mineral', price: 100.23, description: '600 ml', stock: 15, category_id: 1 },
 { name: 'Arroz inflado', price: 180, description: '200 gr', stock: 8, category_id: 3 },
 { name: 'Caramelos', price: 60, description: 'Paquete de 6', stock: 21, category_id: 4 },
 { name: 'Chicles', price: 70.50, description: 'Chicle Tipo Americano', stock: 12, category_id: 4 },
 { name: 'Mantecada', price: 140, description: 'Paquete de 2', stock: 18, category_id: 5 },
 { name: 'Donas', price: 210, description: 'Azucaradas', stock: 21, category_id: 5 },
 { name: 'Hamburguesas Patty', price: 140, description: 'Paquete de 2', stock: 18, category_id: 5 },
 { name: 'Masitas', price: 70, description: 'Azucaradas', stock: 21, category_id: 5 },
]

knex('products')
 .insert(products)
 .then(() => console.log('Productos insertados'))
 .catch(err => console.log(`Error: ${err.message}`))
 .finally(() => knex.destroy())
