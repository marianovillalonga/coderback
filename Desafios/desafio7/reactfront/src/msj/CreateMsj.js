import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8080/msjs/'

const CompCreateMsj = () => {
    const [name, setName] = useState('')
    const [msj, setMsj] = useState('')
    const navigate = useNavigate()    
    
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, name:name,msj:msj})
        navigate('/')
    }   

    return (
        <div>
           <h3>Create POST</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Msj</label>
                    <textarea
                        value={msj}
                        onChange={ (e)=> setMsj(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <button type='submit' className='btn btn-primary'>Enviar</button>                  
           </form>
        </div>
    )
}

export default CompCreateMsj