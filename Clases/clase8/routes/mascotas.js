import express from "express"

const mascotas = [];

const mascotasRoute = express.Router()

mascotasRoute.use(express.json())
mascotasRoute.use(express.urlencoded({extended:true}))
                  
mascotasRoute.get("/",(req,res)=>{
  res.send(mascotas)
})

mascotasRoute.post("/",(req,res)=>{
  const mascota = req.body
  if(mascota.nombre && mascota.raza && mascota.edad){
    mascotas.push(mascota)  
  }
  else{
    return res.status(400).send({error:"parametros incorrectos"})
  }
  
  res.send(mascotas)
})

export default mascotasRoute