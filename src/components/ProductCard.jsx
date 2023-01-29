import React from "react";
import DeleteButton from "./DeleteButton";
import { BrowserRouter as Navigate, useNavigate, Link } from "react-router-dom";

function ProductCard (props){

    const navigate = useNavigate();
    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      })

    if(props.loading) {
        return <div class="spinner-border" role="status">
        <span class="visually-hidden"></span>
      </div>
    }
    const style = {
        width: "20rem",
        height: "25rem"
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (<div className="row">       
            {props.products.map((product, index)=> (
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div keu ={index}className="card card-product" style={style}>
                        <img className="card-img-top" src={product.image} alt="Card image cap"></img>
                        <div className="card-body">
                        <h5 className="product-category">{capitalizeFirstLetter(product.category)}</h5>
                        <h3 className="card-title">{product.name}</h3>
                        </div>
                        <h2 href="#" class="price">{formatter.format(product.price)}</h2>
                        {props.isMyProducts ? <DeleteButton idProduct = {product._id}/>: <button className="btn-eliminar" onClick={()=>{
                            localStorage.setItem("DetailProduct", JSON.stringify(product));
                            navigate("/detailproduct")
                        }}>Mostrar más</button>}
                    </div>
                </div>
            ))}
    </div>)
}

export default ProductCard;