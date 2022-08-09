import express from 'express'
import personas from './routes/personas.js'
import mascotas from './routes/mascotas.js'



const app = express();
app.use("/mascotas",mascotas)
app.use("/personas",personas)
app.use(express.static("public"))
const port = process.env.PORT || 8080;


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
