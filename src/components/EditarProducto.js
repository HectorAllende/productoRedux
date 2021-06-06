import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {editarProductoAction} from '../actions/productoActions'

const EditarProducto = () => {


    const dispatch = useDispatch()
    const navigate= useNavigate()

    const [producto, guardarProducto]= useState({
        nombre:'',
        precio:''
    })

    const productoeditar= useSelector(state=>state.productos.productoeditar)

   

    useEffect(() => {
        
        guardarProducto(productoeditar)
    }, [productoeditar])

    

    const {nombre, precio}= producto;



    // const {nombre, precio, id}= producto;


    const onChangeFormulario=e=>{
        guardarProducto({
            ...producto,
            [e.target.name]:e.target.value
        })
    }


    const submitEditarProducto=(e)=>{
        e.preventDefault()

        dispatch(editarProductoAction(producto))
        navigate('/')
    }


    return (  
        <>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weigth-bold">
                            Editar Producto
                        </h2>

                         <form
                            onSubmit={submitEditarProducto}
                         >
                             <div className="form-group">
                                 <label>Nuevo Producto</label>

                                 <input
                                     type="text"
                                     className="form-control"
                                     placeholder="Nombre del producto"
                                     name="nombre"
                                     value={nombre}
                                     onChange={onChangeFormulario}

                                 />
                             </div>

                             <div className="form-group">
                                 <label>Precio Producto</label>

                                 <input
                                     type="number"
                                     className="form-control"
                                     placeholder="Nombre del producto"
                                     name="precio"
                                     value={precio}
                                     onChange={onChangeFormulario}
                                 />
                             </div>

                             <button
                                 type="submit"
                                 className="btn btn-primary font-weight-bold text-uppercase b-block w-100"
                             >
                                 Guardar Cambios
                             </button>

                         </form>

                    </div>
                </div>
            </div>
        </div>
     </>
    );
}
 

export default EditarProducto;