import React, {useState, useEffect} from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { BrowserRouter as Navigate, useNavigate, Link } from "react-router-dom";
function MyProducts (){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10);
    const [userProducts, setUserProducts] = useState([]);
    const [usuario, setUsuario] = useState(
        JSON.parse(localStorage.getItem("Usuario")),
    );
    

    useEffect(()=> {
        const fetchProducts = async () => {
            setLoading(true);
            const res = await fetch("http://localhost:3000/api/products/"+usuario._id)
            .then((response)=> response.json())
            .then((data) => {
                return data;
            })
            setUserProducts(res);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = userProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    function paginate (pageNumber) {
        return setCurrentPage(pageNumber);
    }   

    function handleAgregar(){
        navigate("/addproduct");
    }

    return <div>
        <h1>Mis productos</h1>
        <div className="row">
            <div className="col-9">

            </div>
            <div className="col-3">
                <button  className="btn-agregar-producto" onClick={handleAgregar}>Agregar producto</button>
            </div>
            
        </div>
        <div className="row">
                <div className="col-12">
                    <ProductCard products={currentProducts} loading = {loading} isMyProducts = {true}/>
                </div>
                
                
        </div>
        <div className="row">
            <div className="col-2">
            </div>
            <div className="col-8">
            <Pagination productsPerPage={productsPerPage} totalProducts = {userProducts.length} paginate ={paginate}/>
            </div>
            <div className="col-2">
            </div>
            
        </div>
    </div>
}

export default MyProducts;