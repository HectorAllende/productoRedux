import React from 'react';

const EditarProducto = () => {
    return (  
        <>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weigth-bold">
                            Editar Producto
                        </h2>

                         <form>
                             <div className="form-group">
                                 <label>Nuevo Producto</label>

                                 <input
                                     type="text"
                                     className="form-control"
                                     placeholder="Nombre del producto"
                                     name="nombre"

                                 />
                             </div>

                             <div className="form-group">
                                 <label>Precio Producto</label>

                                 <input
                                     type="number"
                                     className="form-control"
                                     placeholder="Nombre del producto"
                                     name="nombre"

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