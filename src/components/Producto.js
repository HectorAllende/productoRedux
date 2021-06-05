import React from 'react';



const Producto = ({producto}) => {

    const {nombre, precio, id} = producto


    return (  
     
        <tr>
            <td>{nombre}</td>

            <td><span className="font-weight-bold">${precio}</span></td>

            <td className="acciones"> 
                <button className="btn btn-primary mr-2" type="button">Editar</button>
                <button className="btn btn-danger" type="button">Eliminar</button>



            </td>
        </tr>
    );
}

 
export default Producto;