const express = require('express');
const session = require('express-session');

const app = express()

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })

server.on("error", error => console.log(`Error en servidor ${error}`))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'qwerty',
    resave: true,
    saveUninitialized: true
}))


app.post('/api/registro', (req, res) => {
    let usuario = req.body.usuario;
    let password = req.body.password;
    let usuarios = [];
    if (usuario && password) {
        usuarios.push({usuario: usuario, password: password});
        res.json({usuarios: usuarios});
    } else {
        res.json({error: "El usuario o la contraseña no pueden estar vacios"});
    }
})

app.post('/api/login', (req, res) => {
   
    const { username, password } = req.body

    const found = users.find(elem => {
        elem === {username: username, password: password}
    });

    if (found) {
        req.session.username = username;
    } else {
        res.json({Error: 'Usuario o contraseña incorrectos'})
    }
})

app.get('/api/logout', (req, res) => {
    return req.session.destroy(err => {
        if (!err) {
            return res.send('Logout successfull')
        }
        return res.send({ error: err })
    }).catch(err => {
        return res.send({ error: err })
    }).finally(() => {
        return res.send('Logout successfull')
    })
})


