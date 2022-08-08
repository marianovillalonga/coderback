//importamos el Modelo
import ProductModel from "../models/ProductModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllProduct = async (req, res) => {
    try {
        const blogs = await ProductModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getProduct = async (req, res) => {
        try {
            const blog = await ProductModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(blog[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createProduct = async (req, res) => {
    try {
       await ProductModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateProduct = async (req, res) => {
    try {
        await ProductModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteProduct = async (req, res) => {
    try {
        await ProductModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}