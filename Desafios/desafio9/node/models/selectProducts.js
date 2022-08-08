import db from "../database/db.js";

import { DataTypes } from "sequelize";
import { knex } from "knex";

 const MsjModel = db.define('msjs', {
     title: { type: DataTypes.STRING },
     content: { type: DataTypes.STRING },
 })

 knex.from('msj').select('*')
 .then(msj => {
   console.log(`Total de Mensajes: ${msj.length}`)
   msj.forEach(msj => console.log(`Nombre: ${msj.name} y el mensaje es: $${msj.msj}`))
 })
 .catch(err => console.log(`Error: ${err.message}`))
 .finally(() => knex.destroy())


 export default MsjModel