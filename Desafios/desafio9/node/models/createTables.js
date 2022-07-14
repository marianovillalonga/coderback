import db from "../database/db.js";

import { knex } from "knex";

 const MsjModel = db.define('msjs', {
     title: { type: DataTypes.STRING },
     content: { type: DataTypes.STRING },
 })

 knex.schema
 .createTable('msj', table => {
   table.increments('id')
   table.string('name', 30)
 })

 knex.schema
 .createTable('productos', table => {
   table.increments('id')
   table.string('name', 30)
 })

 .then(() => {
    return knex.schema.createTable('msj', table => {
      table.increments('id')
      table.string('name', 30)
      table.string('msj',255)
      table.integer('category_id').unsigned().references('categories.id')
    })
  })
  .then(() => console.log('Tabla de msj creada'))


  .then(() => {
    return knex.schema.createTable('productos', table => {
      table.increments('id')
      table.string('name', 30)
      table.string('description',255)
      table.number('priece',20)
      table.integer('category_id').unsigned().references('categories.id')
    })
  })
  .then(() => console.log('Tabla de productos creada'))

 export default MsjModel