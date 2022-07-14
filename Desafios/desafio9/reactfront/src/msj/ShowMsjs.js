import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8080/msjs/'


const CompShowMsjs = () => {
    
    const [msjs, setMsj] = useState([])
    useEffect( ()=>{
        getMsjs()
    },[])

    const getMsjs = async () => {
        const res = await axios.get(URI)
        setMsj(res.data)
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Name</th>
                                <th>Mensaje</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { msjs.map ( (msj) => (
                                <tr key={ msj.id}>
                                    <td> { msj.name } </td>
                                    <td> { msj.msj } </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowMsjs