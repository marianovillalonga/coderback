import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/products/'


const CompShowProducts = () => {
    
    const [products, setProduct] = useState([])
    useEffect( ()=>{
        getProducts()
    },[])

    //procedimineto para mostrar todos los productos
    const getProducts = async () => {
        const res = await axios.get(URI)
        setProduct(res.data)
    }

    //procedimineto para eliminar un productos
    const deleteProduct = async (id) => {
       await axios.delete(`${URI}${id}`)
       getProducts()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { products.map ( (product) => (
                                <tr key={ product.id}>
                                    <td> { product.title } </td>
                                    <td> { product.content } </td>
                                    <td> { product.price } </td>
                                    <td>
                                        <Link to={`/edit/${product.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteProduct(product.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowProducts