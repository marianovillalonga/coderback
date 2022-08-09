import { Router } from 'express'

const router = Router()

router.post('/populate', (req, res) => {
    try{
        res.json(await apiUsuarios.populate(req.query.total))
    }catch(err){
        next(err)
    }
})

router.get('/', (req, res) => {})

router.get('/:id', (req, res) => {})

router.put('/:id', (req, res) => {})

router.delete('/:id', (req, res) => {})

router.use((err,req,res,next) => {
    const erroresConocidos =[
        'Error al listar:',
        'Error al actualizar:',
        'Error al borrar:'
    ]

    if(erroresConocidos.includes){
        res.status(400).json({
            message: err.message
        })
    }
    
})

export default router