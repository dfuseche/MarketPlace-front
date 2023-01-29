import React from "react";

function Carousel(){
    return <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="https://i0.wp.com/get.witei.com/wp-content/uploads/2022/04/cartera-de-productos-ejemplos.jpg?fit=1200%2C675&ssl=1" alt="First slide"></img>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://www.lifeder.com/wp-content/uploads/2020/02/objetos-tecnol%C3%B3gicos-lifeder-imagen-1.jpg" alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/08/16/thumbs_b_c_16fe09358edae67044cb570fa4fda35c.jpg?v=202011" alt="Third slide"></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>;
}

export default Carousel;