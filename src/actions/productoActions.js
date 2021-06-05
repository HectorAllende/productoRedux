import{
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,

    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,

    OBTENER_PRODUCTO_EDITAR



} from '../types'

import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'


export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {

        dispatch(agregarProducto())

        try {


            await clienteAxios.post('/productos', producto)
            dispatch(agregarProductoExito(producto))

            Swal.fire(
                'Correcto!',
                'El producto se agregó!',
                'success'
              )

         
        } catch (error) {

            dispatch(agregarProductoError(true))
        }
    }
}


const agregarProducto=()=>({
    type: AGREGAR_PRODUCTO,
    payload: true
})

const agregarProductoExito=(producto)=>({
    type:AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError=(estado)=>({
    type:AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

// Funcion que descarla los productos a la base de datos

export function obtenerProductosAction(){

    return async(dispatch)=>{
        dispatch(descargarProductos())

        try {
            const resultado = await clienteAxios.get('/productos')
            // console.log(resultado.data)
            dispatch(descargarProductosExito(resultado.data))
            
        } catch (error) {
            dispatch(descargaProductosError())
            
        }
    }

}

const descargarProductos=()=>({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true

})

const descargarProductosExito=(productos)=>({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError=()=>({
    type:DESCARGA_PRODUCTOS_ERROR,
    payload: true
})


export function eliminarProductoAction(id){
    return async(dispatch)=>{
        dispatch(obtenerProductoEliminar(id))

        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito())

            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

        } catch (error) {
            dispatch(eliminarProductoError())
        }

    }
}

const obtenerProductoEliminar=(id)=>({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito=()=>({
    type: PRODUCTO_ELIMINADO_EXITO,
    payload: true
})

const eliminarProductoError=()=>({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})

export function obtenerProductoEditarAction(producto){
    return async(dispatch)=>{
        dispatch(obtenerProductoEditar(producto))
    }
}

const obtenerProductoEditar=(producto)=>({
    type:OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

