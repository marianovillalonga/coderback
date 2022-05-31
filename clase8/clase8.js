const express = require('express');

const {router} = express;

const app = express();

app.use(express.json());
app.use (express.urlencoded({extended: true}));

let mensaje =[
    {
        id: 1,
        nombre: 'Juan',
        mensaje: 'Hola'
    },
    {
        id: 2,
        nombre: 'Pedro',
        mensaje: 'Hola'
    }
]

const mensajeRoute = router();

mensajeRoute.get('/', (req, res) => {
    return res.json(mensaje);
});

mensajeRoute.post('/', (req, res) => {
    const newMensaje = req.body;

    newMensaje.id = mensaje.length + 1;

    mensaje.push(newMensaje);

    return res.json(newMensaje);
});

app.use('/mensaje', mensajeRoute);
const PORT = 8080;

