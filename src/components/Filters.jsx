import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import categories from "../category.json";
import {useForm} from "../hooks/useForm";

function Filters(props){
    const url = useLocation().pathname;
    const lastSegment = url.split("/").pop();
    const [category, setCategory] = useState(lastSegment);
    const [formValues, setFormValues] = useForm({
        min: "",
        max: ""
    });
    console.log(formValues);
    
    const fetchProductsByCategory = async () => {
        const res = await fetch("http://localhost:3000/api/products/category/"+category)
        .then((response)=> response.json())
        .then((data) => {
            return data;
        })
        if(formValues.min !== "" && formValues.max !== ""){
            props.setProducts(res.filter(product=>{return product.price >= parseInt(formValues.min, 10) && product.price <= parseInt(formValues.max, 10) }));
        }else if(formValues.max !== "" && formValues.min === "" ){
        
            props.setProducts(res.filter(product=>{return product.price <= parseInt(formValues.max, 10)}));
        }else if(formValues.min !== "" && formValues.max === ""){
            props.setProducts(res.filter(product=>{return product.price >= parseInt(formValues.min, 10)}));
        }else{
            props.setProducts(res);
        }
    }
    const fetchAllProducts = async () => {
        const res = await fetch("http://localhost:3000/api/products")
        .then((response)=> response.json())
        .then((data) => {
            return data;
        })
        if (formValues.min !== "" &&  formValues.max !== ""){
            props.setProducts(res.filter(product=>{return product.price >= parseInt(formValues.min, 10) && product.price <= parseInt(formValues.max, 10)}));
        }else if(formValues.max !== "" ){
            props.setProducts(res.filter(product=>{return product.price <= parseInt(formValues.max, 10)}));
        }else if(formValues.min !== "" && formValues.max === ""){
            props.setProducts(res.filter(product=>{return product.price >= parseInt(formValues.min, 10)}));
        }else{
            props.setProducts(res);
        }
        
  
    }

    const handleClick = () => {  
        if(category === "todas")
        {
            fetchAllProducts();
        }else {
            fetchProductsByCategory();
        }
    
      
    };

    
     
    return <div className="col-lg-2 col-md-5 col-sm-6">
        <h3>Filtros</h3>
        <h4>Categoría</h4>
        <form>
            <div>
                <select className="select-filter" value={category} onChange={(e)=> setCategory(e.target.value)}>
                    {categories.map((option, i) => {
                    return (
                    <option value={option.value} key={i}>
                        {option.label}
                    </option>
                    );
                    })}
                </select>
            </div>
            <h4>Precio</h4>
            <input className="filtrar-precio"type="number"placeholder="min" name="min" onChange={setFormValues}></input> 
            <input className="filtrar-precio" type="number"placeholder="máx" name="max" onChange={setFormValues}></input>
            <button className="btn-filtrar" onClick={handleClick} type="button">Filtrar</button>
        </form>
        
    </div>
}

export default Filters;