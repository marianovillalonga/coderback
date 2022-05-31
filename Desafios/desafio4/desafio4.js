const productos = [  
    { id:1, nombre:'Escuadra', precio:323.45 }, 
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const express = require('express');

const app = express()

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })

server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/api/productos', (req, res) => {
    res.send(productos)
})

app.get('/api/productos/:id', (req, res) => {
    const id = req.params.id
    const producto = productos.find(producto => producto.id == id)
    if(producto)
        res.send(producto)
    else
        res.sendStatus(404)
})

//agrega un producto
app.post('/api/productos', (req, res) => {
    const producto = req.body
    producto.id = productos.length + 1
    productos.push(producto)
    res.send(producto)
})

//actualiza al producto
app.put('/api/productos/:id', (req, res) => { // el metodo put es para actualizar
    const id = req.params.id
    const producto = req.body
    const index = productos.findIndex(producto => producto.id == id)
    if(index >= 0){
        productos[index] = producto
        res.send(producto)
    }else{
        res.sendStatus(404)
    }
})

//elimina un producto
app.delete('/api/productos/:id', (req, res) => {
    const id = req.params.id
    const index = productos.findIndex(producto => producto.id == id)
    if(index >= 0){
        productos.splice(index, 1)
        res.sendStatus(200)
    }else{
        res.sendStatus(404)
    }
})