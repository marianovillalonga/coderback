const db = requiere('../db')
const userModel = require('./models/user')

const data = {
 namde: 'Mariano',
 lastname: 'Villalonga',
 email: 'marianovillalonga94.mv@gmail.com',
 username: 'mariano',
 password: 'Mariano2021+'
}

const user = new userModel(data)

db
 .then(_ => user.save())
 .then(document => console.log('User saved', document))
 .catch(err => console.error(`Error: ${err.message}`))
 .finally(_ => process.exit())

 