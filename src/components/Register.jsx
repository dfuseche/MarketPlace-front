import React from "react";
import {useForm} from "../hooks/useForm"
import { BrowserRouter as Navigate, useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';

function Register(props){
    const navigate = useNavigate();
    const [formValues, setValues] = useForm({
        fName: "",
        lName: "",
        email: "",
        cedula: "",
        telephone: "",
        password: "",
        address: "",
    })

    const {fName, lName, email, cedula, telephone, password, address} = formValues;

    function handleSubmit(){
        console.log(JSON.stringify(formValues))
        fetch("https://marketplace-back-production.up.railway.app/api/usuarios", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(formValues),
        }).then((resp) =>{
            console.log(resp)
            switch (resp.status) {
            case 400:
                Swal.fire("Ups! Parece que tus datos son inválidos");
            break;
            case 401:
                Swal.fire("Ups! Parece que ya existe un usuario con ese correo")
            break;
            default:
                Swal.fire({
                    title: "¡Bienvenido!",
                    text: "Usuario registrado existosamente",
                    icon: "success",
                    button: "Ir a la plataforma",
                });
                resp.json().then((data) =>{
                    localStorage.setItem("Usuario", JSON.stringify(data.user));
                    props.setUsuario(data.user.nombre);
                    navigate("/home");
                    window.location.reload();
                })
            }
            
            
        })

    }
    return <div>
        <form className="register">
            <div className="row">
                <div className="col-6">
                    <input type="text" placeholder="Nombre" name="fName" value={fName} onChange={setValues}></input>
                </div>
                <div className="col-6">
                    <input type="text" placeholder="Apellido" name="lName" value={lName} onChange={setValues}></input>
                </div>  
            </div>
            <div className="row">
                <div className="col-6">
                    <input type="text" placeholder="Cédula" name="cedula" value={cedula} onChange={setValues}></input>
                </div>
                <div className="col-6">
                    <input type="text" placeholder="Celular" name="telephone" value={telephone} onChange={setValues}></input>
                </div>  
            </div>
            <div className="row">
                <div className="col-6">
                    <input type="text" placeholder="Dirección" name="address" value={address} onChange={setValues}></input>
                </div>
                <div className="col-6">
                    <input type="text" placeholder="Correo" name="email" value={email} onChange={setValues}></input>
                </div>  
            </div>
            <div className="row">
                <div className="col-6">
                    <input type="password" placeholder="Password" name="password" value={password} onChange={setValues} ></input>
                </div>
            </div>

            
            
            
            
            
            
            
            <button className="btn-signin" onClick={handleSubmit} type="button" >Crear cuenta</button>
        </form >
    
    </div>
}

export default Register;