const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
    secret: 'qwerty',
    resave: true,
    saveUninitialized: true
}))

app.get('/session', (req, res) => {
    if (req.session.contador) {
      req.session.contador++
      return res.send(`Has visitado ${req.session.contador} veces el sitio.`)
    }
   
    req.session.contador = 1
    res.send('Bienvenido.')
})

app.get('/logout', (req, res) => {
    return req.session.destroy(err => {
      if (!err) {
        return res.send({ logout: true })
      }
      return res.send({ error: err })
    })
})

app.get('/login', (req, res) => {
    const { username, password } = req.query
   
    const user = users.find(u => {
      return u.username === username && u.password === password
    })
   
    if (!user) {
      return res.json({ error: 'Login failed'})
    }
   
    req.session.user = username
    req.session.admin = user.admin
   
    return res.json({
      user: req.session.user,
      admin: req.session.admin
    })
})

const auth = (req, res, next) => {
    if (req.session.user) {
      return next()
    }
   
    return  res.status(401).json({
      error: 'Necesitas iniciar sesión'
    })
}

const isAdmin = (req, res, next) => {
 if (req.session.admin) {
   return next()
 }

 return  res.status(401).json({
   error: 'Necesitas ser usuario administrador'
 })
}

app.get('/profile', auth, (req, res) => {
    return res.send('si estás viendo esto es porque ya te logueaste!')
})

app.get('/admin', auth, isAdmin, (req, res) => {
    return res.send('si estás viendo esto es porque eres usuario administrador!')
})

const PORT = 8000

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))