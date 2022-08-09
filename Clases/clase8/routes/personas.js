import express from "express"

const personasRoute = express.Router()

const personas = [];

personasRoute.use(express.json())
personasRoute.use(express.urlencoded({extended:true}))
                  
personasRoute.get("/",(req,res)=>{
  res.send(personas)
})

personasRoute.post("/",(req,res)=>{
  const persona = req.body
  if(persona.nombre && persona.apellido && persona.edad){
    personas.push(persona)  
  }
  else{
    return res.status(400).send({error:"parametros incorrectos"})
  }
    res.send(personas)
})

export default personasRoute