import React from "react";

const TablaAutos = ({auto, deleteAuto}) => {
    return (
        <div class="card container mb-5">
            <h2>Tabla de autos</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Marca
                        </th>
                        <th>
                            Modelo
                        </th>
                        <th>
                            Modelo
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                {auto.map(auto=>(                    
                        <tr>
                            <td>{auto.id}</td>
                            <td>{auto.marca}</td>
                            <td>{auto.modelo}</td>
                            <td>{auto.modelo}</td>
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    onClick={() => {
                                        deleteAuto(auto.marca);
                                    }}
                                    >
                                    Eliminar
                                </button>  
                            </td>
                        </tr>
                    ))}                  

                </tbody>

            </table>
        </div>
    )
}

export default TablaAutos;