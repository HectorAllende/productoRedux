import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {crearNuevoProductoAction} from '../actions/productoActions'
import {useNavigate} from 'react-router-dom'


const NuevoProducto = () => {

    const navigate = useNavigate()

    const [nombre, guardarNombre]= useState('')
    const [precio, guardarPrecio] = useState('')

    const dispatch = useDispatch()
    const agregarProducto=producto=>dispatch(crearNuevoProductoAction(producto))

    const cargando = useSelector((state)=>state.productos.loading)

    // console.log(cargando)
    const error = useSelector((state)=>state.productos.error)
    // console.log(error)

    const submitNuevoProducto=e=>{
        e.preventDefault()

        if(nombre.trim()==='' || precio<=0){
            return;
        }

        agregarProducto({
            nombre, 
            precio
        })
        navigate('/')
        
    }

    
    return (  
        <>
           <div className="row justify-content-center">
               <div className="col-md-8">
                   <div className="card">
                       <div className="card-body">
                           <h2 className="text-center mb-4 font-weigth-bold">
                               Agregar Nuevo Producto
                           </h2>

                            <form
                                onSubmit={submitNuevoProducto}
                            >
                                <div className="form-group">
                                    <label>Nuevo Producto</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre del producto"
                                        name="nombre"
                                        value={nombre}
                                        onChange={e=>guardarNombre(e.target.value)}

                                    />
                                </div>

                                <div className="form-group">
                                    <label>Precio Producto</label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Nombre del producto"
                                        name="nombre"
                                        value={precio}
                                        onChange={e=>guardarPrecio(e.target.value)}

                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary font-weight-bold text-uppercase b-block w-100"
                                >
                                    Agregar
                                </button>

                            </form>

                            {cargando ? <p>Cargando...</p>: null}

                            {error ? <p className="alert alert-danger p1 mt-4 text-center">Hubo un error</p>: null}



                       </div>
                   </div>
               </div>
           </div>
        </>
    );
}

 
export default NuevoProducto;