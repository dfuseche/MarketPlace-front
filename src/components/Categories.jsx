import React from "react";

function Categories(){
    
    return <div>
        <a className="dropdown">
                <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/catalogue/electronicos">Electronicos</a>
                    <a className="dropdown-item" href="/catalogue/hogar">Hogar</a>
                    <a className="dropdown-item" href="//catalogue/moda">Moda</a>
                    <a className="dropdown-item" href="/catalogue/mascotas">Mascotas</a>
                    <a className="dropdown-item" href="/catalogue/deportes">Deportes</a>
                    <a className="dropdown-item" href="/catalogue/tecnologia">Tecnología</a>
                    <a className="dropdown-item" href="/catalogue/belleza">Belleza</a>
                    <a className="dropdown-item" href="/catalogue/salud">Salud</a>
                    <a className="dropdown-item" href="/catalogue/libros">Libros</a>
                </div>
        </a>
    </div>
}

export default Categories;