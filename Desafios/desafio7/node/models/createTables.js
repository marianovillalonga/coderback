import db from "../database/db.js";

import { DataTypes } from "sequelize";
import { knex } from "knex";

 const MsjModel = db.define('msjs', {
     title: { type: DataTypes.STRING },
     content: { type: DataTypes.STRING },
 })

 knex.schema
 .createTable('categories', table => {
   table.increments('id')
   table.string('name', 30)
 })

 .then(() => {
    return knex.schema.createTable('msj', table => {
      table.increments('id')
      table.string('name', 30)
      table.float('msj',255)
      table.integer('category_id').unsigned().references('categories.id')
    })
  })
  .then(() => console.log('Tabla de msj creada'))

 export default MsjModel