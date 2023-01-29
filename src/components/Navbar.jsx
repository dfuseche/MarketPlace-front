import React, {useState} from "react";
import { useForm } from "../hooks/useForm";

function Navbar(){

   
    const [usuario, setUsuario] = useState(

        JSON.parse(localStorage.getItem("Usuario")),
    );

    const [searchBarText, setSearchBarText] = useForm({
        texto: ""
    })
    function handleSearch (){
        
    }

    const styleNav = {
        backgroundColor: "#0CDE6D"
    }
    function handleLogOut(){
        localStorage.setItem("Usuario", JSON.stringify({}));
        fetch("/api/auth/logout").then((response)=> response.json())
        .then((data) => {
            window.location.reload();
        })
        
    }

    return <div className="carouselHome">
        <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light navbar-color" style={styleNav}>
        <a className="navbar-brand navbar-title" href="/home">FASTMARKET</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            
            <div className="navbar-nav ml-auto">
            
            <a className="nav-item nav-link" href="/home">Home </a>
            <a className="nav-item nav-link" href="/catalogue">Catalogo </a>
            {usuario !== null?usuario.fName === undefined?<a className="nav-item nav-link " href="/signin" tabIndex="-1" aria-disabled="true">Iniciar sesión</a>:<a className="nav-item nav-link " onClick={handleLogOut} href="/" tabIndex="-1" aria-disabled="true">Cerrar sesión</a>: <a className="nav-item nav-link " href="/signin" tabIndex="-1" aria-disabled="true">Iniciar sesión</a> }
            
            
            </div>
        </div>
        </nav>
    </div>
}

export default Navbar;