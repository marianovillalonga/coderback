import {Sequelize} from 'sequelize'

const db = new Sequelize('mensaje', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db