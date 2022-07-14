import db from "../database/db.js";

import { DataTypes } from "sequelize";

 const MsjModel = db.define('msjs', {
     title: { type: DataTypes.STRING },
     content: { type: DataTypes.STRING },
 })

 export default MsjModel