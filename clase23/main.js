const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

app.get('/set', (req, res) => {
 res.cookie('server', 'express').send('Cookie set')
})
   
app.get('/setEX', (req, res) => {
 res.cookie('server2', 'express2', { maxAge: 30000 }).send('Cookie set')
})

app.get('/get', (req, res) => {
   return res.send({
        server: req.cookies.server,
        server2: req.cookies.server2,
        serverSigned: req.signedCookies.serverSigned
   })
})

app.get('/set-signed', (req, res) => {
    return res.cookie('serverSigned', 'expressSigned',{signed: true}).send('Cookie set')
})

app.get('/clear', (req, res) => {
    return res.clearCookie('server').send('Cookie cleared')
})

const PORT = 8000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))