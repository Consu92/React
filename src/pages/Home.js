import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {FormularioUsuario,TablaUsuarios,BotonFormulario,} from "../components";

const usuario1 = [
    {
        nombre: "Nicole",
        apellido: "Opazo",
        correo: "nicole.o@gmail.com",
        rut: "9563214-8",
    },
    {
        nombre: "Marco",
        apellido: "Povea",
        correo: "marco.p@gmail.com",
        rut: "17456329-9",
    },
    {
        nombre: "Nicolás",
        apellido: "Bustamante",
        correo: "nicolas.b@gmail.com",
        rut: "9563213-8",
    },
    {
    nombre: "Consuelo",
    apellido: "Silva",
    correo: "consuelo.s@gmail.com",
    rut: "9563213-8",
    },
];

const usuario2 = {
    nombre: "Josuke",
    apellido: "Higashikata",
    correo: "jojo@gmail.com",
    rut: "17456329-9",
};

const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]));
  //en este momento state vale lo mismo que usuario 1
  //genera una funcion setteadora que me va a permitir cambiar los datos se usuario 1 sin afectarlo directamente(setState)
    const [user, setUser] = useState(usuario1);
    const[usuarioEditado, setUsuarioEditado] = useState(null);

    const userDelete =(rutUsuario)=>{
        //esta funcion filtra mi lista de usuarios
        const changeUser = user.filter(usuario => usuario.rut != rutUsuario);
        //al momento de ocupar la funcion setState, yo le voy a cambiar el valor TEMPORAL a mis usuarios
        setUser(changeUser);
    }

  const userAdd =(usuario)=>{ //se creo la función agregar que le dimos un parametro
    const addUsuario =[
        //mantenme los datos que tengo en user y agregame lo que yo te entrego aquí (usuario)
        ...user, usuario 
    ]
    //luego actualizamos o (setteamos) el state
    setUser(addUsuario);
    };

    const userEdit =(usuarioEditado)=>{
    const editUser = user.map(usuario => (usuario.rut === usuarioEditado.rut ? usuarioEditado: usuario))

    setUser(editUser);
    }

    return (
    <div class="container mt-3">
        <div class="row">
        <div class="col">
            <FormularioUsuario 
            userAdd={userAdd} 
            usuarioEditado={usuarioEditado} 
            setUsuarioEditado={setUsuarioEditado}
            userEdit={userEdit}
            />
        </div>
        </div>
        <BotonFormulario infoBoton={"Ir a autos"} handleOnClick={handleOnClick} />
        <hr />
        <div class="row">
        <div class="col">
    <TablaUsuarios usuarios={user} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado} />
        </div>
        </div>
    </div>
    );
};

export default HomePage;
