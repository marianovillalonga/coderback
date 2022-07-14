import MsjModel from "../models/MsjModel.js";

export const getAllMsj = async (req, res) => {
    try {
        const msjs = await MsjModel.findAll()
        res.json(msjs)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getMsj = async (req, res) => {
        try {
            const blog = await MsjModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(blog[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}

export const createMsj = async (req, res) => {
    try {
       await ProductModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
