const { query } = require('express');
const express = require('express');

const app = express();

const mensaje = [
    {
        id: 1,
        title: 'OK',
        mensaje: ''
    },
    {
        id: 2,
        title: 'KO',
        mensaje: ''
    }
];

app.get('/api/mensajes/:id', (req, res) => {

    console.log('Hola mundo');
   
    const id = Number(req.params.id);

    if(!req.query.title) {
        return res.json(mensaje);
    }

    const mensajeFiltrado = mensaje.find(mensaje => mensaje.id == id);

    res.json(mensajeFiltrado);

   return res.json(mensaje);
}
);

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
}
);
