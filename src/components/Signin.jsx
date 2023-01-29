import { set } from "mongoose";
import React from "react";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function Signin(props){

    const [isLogin, setLogin] = useState(true);

    const greenLine = {
        color: "#0CDE6D"
    }

    function changeToLogin (){
        setLogin(true);
    }
    function changeToRegister (){
        setLogin(false);
    }

    return (<div className="sign-in ">   
        <div className="row">
            <div className="col-2">
            </div>
            <div className="col-4">
               <a> <h1 onClick={changeToLogin}><b>Inicia sesión</b></h1></a>
            </div>
            <div className="col-4">
                <h1 onClick={changeToRegister}><b>Crear cuenta</b></h1>
            </div>
            <div className="col-2">
            </div>

        </div>
        <div className="row">
            <div className="col-2">
            </div>
            <div className="col-4">
                <hr style={isLogin ? greenLine : null}></hr>
            </div>
            <div className="col-4">
            <hr style={!isLogin ? greenLine : null}></hr>
            </div>
            <div className="col-2">
            </div>
        </div>
        <div className="row">
            <div className="col-2">
            </div>
            <div className="col-8">
                {isLogin && <Login setUsuario={props.setUsuario} />}   
                {!isLogin && <Register  setUsuario={props.setUsuario}/>} 
            </div>
            
            <div className="col-2">
            </div>        
        </div>

    </div>)

}

export default Signin;
