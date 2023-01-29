import React from "react";
import { BrowserRouter as Navigate, useNavigate, Link } from "react-router-dom";
import {useForm} from "../hooks/useForm";
import Swal from 'sweetalert2';

function Login(props){
    const navigate = useNavigate();
    const [formValues, setValues] = useForm({
        email:"",
        password: ""
    })

    const {email, password} = formValues

    function handleSubmit(){
        fetch("/api/auth/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(formValues),
        }).then((resp) =>{
            switch (resp.status) {
            case 400:
                Swal.fire("Ups! Parece que tus datos son inválidos");
            break;
            case 401:
                Swal.fire("Ups! El correo o la contraseña son incorrectos")
            break;
            default:
                Swal.fire({
                    title: "¡Bienvenido!",
                    icon: "success",
                    button: "Ir a la plataforma",
                });
                resp.json().then((data) =>{
                    console.log(data.user)
                    localStorage.setItem("Usuario", JSON.stringify(data.user));
                    props.setUsuario(data.user);
                    navigate("/home");
                    
                })
            }
            
            
        })
    }

    return <div>
        <form >
            <div className="row">
                <div className="col-6">
                    <input type="text" placeholder="Correo" name="email" value={email} onChange={setValues}></input>
                </div>
                <div className="col-6">
                    <input type="password" placeholder="Contraseña" name="password" value={password} onChange={setValues} ></input>
                </div>
                
            </div>
            <div className="row">
                <button className=" btn-signin" onClick ={handleSubmit} type="button">Iniciar sesión</button>
            </div>
            
        </form>
    </div>
}

export default Login;