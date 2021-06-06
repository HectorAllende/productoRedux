import React from 'react';
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
// Redux

import {useDispatch} from 'react-redux'
import {eliminarProductoAction, obtenerProductoEditarAction} from '../actions/productoActions'





const Producto = ({producto}) => {

    const {nombre, precio, id} = producto

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const redireccionarEditarProducto=(producto)=>{
        dispatch(obtenerProductoEditarAction(producto))
        navigate(`/productos/editar/${producto.id}`)
    }

    const confirmarEliminarProducto=(id)=>{


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(eliminarProductoAction(id))

            }
          })     
            
        
      
    }



    return (  
     
        <tr>
            <td>{nombre}</td>

            <td><span className="font-weight-bold">${precio}</span></td>

            <td className="acciones"> 
                <button 
                    onClick={()=>redireccionarEditarProducto(producto)}
                    className="btn btn-primary mr-2"
                    type="button"
                    >Editar</button>
                <button
                    onClick ={()=>confirmarEliminarProducto(id)}                
                    className="btn btn-danger"
                    type="button"                
                >Eliminar</button>



            </td>
        </tr>
    );
}

 
export default Producto;