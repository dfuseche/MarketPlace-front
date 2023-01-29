import React from "react";
import ProductDetailUser from "./ProductDetailUser";
function ProductDetail (props){

    const product = JSON.parse(localStorage.getItem("DetailProduct"));

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      })

    return <div className="product-detail">
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <img className="img-detail" src={product.image}></img>
            </div>
            <div className="col-lg-6 col-sm-12">
                <h1 className="category-detail">{product.category.toUpperCase()}</h1>
                <h1 className="name-detail">{product.name}</h1>
                <h1 className="descrip-detail">{product.description}</h1>
                <h1 className="price-detail">{formatter.format(product.price)}</h1>
                <ProductDetailUser></ProductDetailUser>
            </div>
        </div>
    </div>
}
export default ProductDetail;