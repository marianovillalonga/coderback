    const { options } = require('./db/mysql')
    const knex = require('knex')(options)
    
    //Creamos la tabla categorías
    
    knex.schema
     .createTable('articulos', table => {
       table.increments('id')
       table.string('name', 30)
     })
    
     .then(() => {
        console.log('Tabla de articulos  creada')
        //Creamos la tabla articulos 
        return knex.schema.createTable('articulos ', table => {
          table.increments('id') 
          table.varchar('name', 15)
          table.varchar('codigo',10)
          table.float('precio')  
          table.integer('stock')
        })
      })
      .then(() => console.log('Tabla de articulos  creada'))
     