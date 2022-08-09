import {Sequelize} from 'sequelize'

const db = new Sequelize('clase16', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db