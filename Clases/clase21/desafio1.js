const express = require('express');

const app = express()

const PORT = 8080;

var faker = require('faker');

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })

server.on("error", error => console.log(`Error en servidor ${error}`))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

const randomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

app.get("/test", (req, res) => {
    const objetos = [];

    for (let i = 0; i < 10; i++) {
        objetos.push({nombre: randomElement(nombres), apellido: randomElement(apellidos), color: randomElement(colores)})
    }

    res.json({objetos})
})
