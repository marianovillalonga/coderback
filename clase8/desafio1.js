const { query } = require('express');
const express = require('express');

const app = express();

const mascotas = [
    {
        id: 1,
        raza: 'OK',
        edad: '5'
    },
    {
        id: 2,
        raza: 'KO',
        edad: '3'
    }
];

const personas = [
    {
        id: 1,
        nombre: 'Belen',
        apellido: 'Zuliani',
        edad: '27'
    },
    {
        id: 2,
        nombre: 'Mariano',
        apellido: 'Villalonga',
        edad: '28'
    }
];

app.get('/mascotas', (req, res) => {
    return res.json(mascotas);
});

app.post('/mascotas', (req, res) => {
    const newMascota = req.body;
    newMascota.id = mascotas.length + 1;
    mascotas.push(newMascota);
    return res.json(newMascota);
});

app.get('/personas', (req, res) => {
    return res.json(personas);
});

app.post('/personas', (req, res) => {
    const newPersonas = req.body;
    newPersonas.id = personas.length + 1;
    personas.push(newPersonas);
    return res.json(newPersonas);
});

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));