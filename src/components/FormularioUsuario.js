import React, { useState, useEffect } from "react";
import BotonFormulario from "./BotonFormulario";

//* Alt+Shift+F --> Ordena la estructura del código

const initialUsuario ={ //se recomienda siempre con initial"algo"" porque es buena práctica
    //Son los atributos del usuario
    nombre:"",
    apellido:"",
    correo:"",
    rut:""
};

const FormularioUsuario = ({userAdd, usuarioEditado, setUsuarioEditado, userEdit}) => {
    const [usuario, setUsuario] = useState(initialUsuario); //Este es otro state, manipula el formulario Usuario
    const {nombre, apellido, correo, rut} = usuario
    //el hook useEffect siempre está pendiente de si la variable que tiene dentro de sus [] cambia el deberá 
    //hacer todo loque tiene en su funcion dentro
    //consideracion: useEfect siempre corre al menos 1 vez cuando la pág carga por primera vez
    useEffect(()=> {
        if(usuarioEditado!==null){
            setUsuario(usuarioEditado)
        }else{
            setUsuario(
                {
                    nombre: "",
                    apellido: "",
                    correo: "",
                    rut: "",
    
                }
            )
        }

    },[usuarioEditado]);

        const handleInputChange =(e)=>{ //por documentacion se usa e
            //esta funcion se llama cada vez que nosotros escribimos algo en nuestro unput de nuestra pagina
            const changedFormValue = {
                //va a mantener los datos que tiene el usuario de los input que no he tocado
                //pero va a actualizar el atributo que cambié por su nuevo valor
                ...usuario, 
                [e.target.name]:e.target.value //trae los datos que te trae el input, Mantenme los datos de initialUsuario pero en rut, actualizame esto y pon todo lo que puse ahora en nombre
            }
            //finalmente los cambios deberán verse reflejados en nuestro hook
            setUsuario(changedFormValue);

        }
    return (
        <div class="card container mb-2">
            <form>
            {/*Hacemos que el mensaje del formulario sea dinámico
            segun si queremos editar o ingresar*/}
                {usuarioEditado !== null ? (
                <h1>Editar Usuario</h1>
            )  :  (
                <h1>Ingrese Usuario</h1>
            )}
                
                <div class="mb-3" >
                    <label class="form-label" for="id">Rut</label>
                    <input 
                    class="form-control" 
                    placeholder="11111111-1" //*siempre type, id, name, value van con minúscula. Placeholder puede ir solo con Mayúscula
                    type="text" 
                    id="id" 
                    name="rut" 
                    value={rut}
                    onChange={handleInputChange}//cuando cambio algo en mi imput cambia algo
                    />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Nombre</label>
                    <input 
                    class="form-control" 
                    placeholder="Juan" 
                    type="text" 
                    id="nombre"  
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}
                    />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Apellido</label>
                    <input 
                    class="form-control" 
                    placeholder="Perez" 
                    type="text" 
                    id="apellido" 
                    name="apellido"
                    value={apellido}
                    onChange={handleInputChange}
                    />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Correo</label>
                    <input 
                    class="form-control" 
                    placeholder="juanperez@correo.cl" 
                    type="email" 
                    id="correo" 
                    name="correo"
                    value={correo}
                    onChange={handleInputChange} //"OnChange" es una funcionalidad, mientras que "useEffect" es un hook (le cambia el estado a una variable)
                    />                          
                </div>
                {usuarioEditado !== null ? (
                <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => userEdit(usuario)}
                >
                    Editar usuario
                </button>
                ) : (
                <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => userAdd(usuario)}
                >
                    Ingresar usuario      
                </button>
                )}

                {usuarioEditado !== null ? (
                    <button
                        type="button"
                        class="btn btn-warning"
                        onClick={() => setUsuarioEditado(null)}
                        >
                        Cancelar
                    </button>
                ) : (
                    <></>
                )}

                <br />
            </form>
        </div>
    )
}

export default FormularioUsuario;