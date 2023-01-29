import React, {useState}from "react";
import Carousel from "./Carousel";
function Home(){

    const [usuario, setUsuario] = useState(
        JSON.parse(localStorage.getItem("Usuario")),
    );

    return <div className="home">
        <h1>{usuario !== null?usuario.fName === null? null: "Bienvenido": null} {usuario === null? null: usuario.fName} {usuario === null? null: usuario.lName}</h1>
        <Carousel />
        <h1>Categorías</h1>
        <div className="categorias">
        <div className="row">
            <div className=" col-lg-1 col-md-0">
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 content-circle">
                <div className="circles">
                    <a href="/catalogue/electronicos"><img className="img-electronicos" src="./img/electrodomesticos.png" alt="image" /></a>
                </div>               
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="circles">
                    <a href="/catalogue/hogar"><img src="./img/hogar.png" alt="image" /></a>
                </div>               
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="circles">
                    <a href="/catalogue/moda"><img className="image-home"src="./img/moda.png" alt="image" /></a>
                </div>               
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="circles">
                    <a href="/catalogue/mascotas"><img src="./img/mascotas.png" alt="image" /></a>
                </div>               
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="circles">
                    <a href="/catalogue/deportes"><img src="./img/deportes.png" alt="image" /></a>
                </div>               
            </div>
            <div className=" col-lg-1 col-md-0">
            </div>
            <div className=" col-lg-2 col-md-0">
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
                <div className=" circles">
                    <a href="/catalogue/tecnologia"><img src="./img/tecnologia.png" alt="image" /></a>
                </div>               
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
                <div className=" circles">
                    <a href="/catalogue/belleza"><img src="./img/belleza.png" alt="image" /></a>
                </div>               
            </div>
            <div className=" col-lg-2 col-md-4 col-sm-12">
                <div className=" circles">
                    <a href="/catalogue/salud"><img className="img-salud"src="./img/salud.png" alt="image" /></a>
                </div>               
            </div>
            <div className=" col-lg-2 col-md-4 col-sm-12">
                <div className=" circles">
                    <a href="/catalogue/libros"><img className="img-libro"src="./img/libros.png" alt="image" /></a>
                </div>               
            </div>
            <div className=" col-lg-2 col-md-0">
            </div>
        </div>

        <div className="row second-row">
            
            
        </div>
        

        </div>
        
    </div>

}

export default Home;