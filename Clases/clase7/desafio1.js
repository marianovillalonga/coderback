const express = require('express');

const app = express()

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })

server.on("error", error => console.log(`Error en servidor ${error}`))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const frase = 'Hola mundo como estan';

app.get('/api/frase', (req, res) => {
    res.json(frase);
})

app.get('/api/letras/:num', (req, res) => {
    if (isNaN(req.params.num)) {
        res.json({error: "El parametro ingresado no es un numero"});
    } else if (Number(req.params.num) < 1 || Number(req.params.num) > frase.length) {
        res.json({error: "Numero ingresado fuera de rango"});
    } else {
        res.json({letra: frase[Number(req.params.num) - 1]})
    }
})

app.get('/api/palabras/:num', (req, res) => {
    if (isNaN(req.params.num)) {
        res.json({error: "El parametro ingresado no es un numero"});
    }
    else if (Number(req.params.num) < 1 || Number(req.params.num) > frase.split(' ').length) {
        res.json({error: "Numero ingresado fuera de rango"});
    }
    else {
        res.json({palabra: frase.split(' ')[Number(req.params.num) - 1]})
    }
})