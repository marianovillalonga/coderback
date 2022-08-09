const { options } = require('./db/mysql')
const knex = require('knex')(options)

//Creamos la tabla categorías

knex.schema
 .createTable('categories', table => {
   table.increments('id')
   table.string('name', 30)
 })

 .then(() => {
    console.log('Tabla de categorías creada')
    //Creamos la tabla productos
    return knex.schema.createTable('products', table => {
      table.increments('id')
      table.string('name', 30)
      table.float('price')
      table.string('description', 255)
      table.integer('stock')
      table.integer('category_id').unsigned().references('categories.id')
    })
  })
  .then(() => console.log('Tabla de productos creada'))
 