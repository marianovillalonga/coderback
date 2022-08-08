const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('./public'))
app.set('views', './views')
// app.set('view engine', 'pug')
app.set('view engine', 'ejs')


app.get('', (req, res) => {
  const data = {
    comision: 30975
  }
  return res.render('index', data)
})

app.get('/hello', (req, res) => {
  const data = {
    mensaje: 'Aprendiendo Pug JS'
  }
  return res.render('hello', data)
})

app.get("/datos", (req, res) => {
  const min = req.query.min;
  const nivel = req.query.nivel;
  const max = req.query.max;
  const title = req.query.title;

   res.render("datos", {min: min, nivel: nivel, max: max, title: title})
})

app.get('/alumnos', (req, res) => {
  const alumnos = [
    { nombre: 'Adrian', apellido: 'Ramirez' },
    { nombre: 'Ariel', apellido: 'Dumpierres' },
    { nombre: 'Augusto', apellido: 'Silva' },
    { nombre: 'Brenda', apellido: 'Bernardi' },
    { nombre: 'Daniel', apellido: 'Hernandez' },
    { nombre: 'Daniel', apellido: 'Mariño' },
    { nombre: 'David', apellido: 'Gomez' },
    { nombre: 'Esteban', apellido: 'Gonzalez' },
    { nombre: 'Federico', apellido: 'Lupis' },
    { nombre: 'Federico', apellido: 'Redondo' }
   ]
   
   const data = {
     alumnos,
     comision: 30975
   }

   return res.render('alumnos', data)
})

const personas = []

app.get('/form', (req, res) => {
  const data = {
    personas
  }
   return res.render('form', data)
})

app.post('/personas', (req, res) => {
  const persona = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
  }

  personas.push(persona)

  return res.redirect('/form')
})

const productos = []

app.get('/formProd', (req, res) => {
  const data = {
    productos
  }
   return res.render('formProd', data)
})

app.post('/productos', (req, res) => {
  const producto = {
    nombre: req.body.nombre,
    precio: req.body.precio,
    imagen: req.body.imagen,
  }

  productos.push(producto)

  return res.redirect('/formProd')
})

let users = []
const messages = []

app.get('/login', (req, res) => res.render('login'))

app.post('/login', (req, res) => {
  const { username } = req.body

  return res.redirect(`/chat?username=${username}`)
})

app.get('/chat', (req, res) => res.render('chat'))

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))

io.on('connection', socket => {
  console.log('Nuevo cliente conectado')

  socket.on('joinChat', ({ username }) => {

    users.push({
      id: socket.id,
      username,
      avatarId: Math.ceil(Math.random() * 6)
    })

    socket.emit('notification', `Bienvenido ${username}`)
    socket.broadcast.emit('notification', `${username} se ha unido al chat`)
    io.sockets.emit('users', users)
  })

  socket.on('messageInput', data => {
   
    const now = new Date()
    const user = users.find(user => user.id === socket.id)
    const message = {
      text: data,
      time: `${now.getHours()}:${now.getMinutes()}`,
      user
    }
    messages.push(message)

    socket.emit('myMessage', message)

    socket.broadcast.emit('message', message)
  })

  socket.on('disconnect', reason => {
    
    const user = users.find(user => user.id === socket.id)
    users = users.filter(user => user.id !== socket.id)
    if (user) {
      socket.broadcast.emit('notification', `${user.username} se ha ido del chat`)
    }
    
    io.sockets.emit('users', users)

  })
})