import React from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";

function SearchBar(props){

    const [searchText, setSearchText] = useForm({
        search: ""
    });
    const fetchAllProducts = async () => {
        const res = await fetch("https://marketplace-back-production.up.railway.app/api/products")
        .then((response)=> response.json())
        .then((data) => {
            return data;
        })
        props.setProducts(res);
        
        
  
    }

    function handleClick (){
        if(searchText.search ===""){
            fetchAllProducts();
        }
        const productsClone = props.products;
        props.setProducts(productsClone.filter(product => {
            console.log(product.name.toLowerCase().includes(searchText.search.toLowerCase()) === true)
            return (product.name.toLowerCase().includes(searchText.search.toLowerCase()) === true);
        }))
    }

    return <div>
        <form class="d-flex" role="search">
        <input class="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search" name="search" onChange={setSearchText}></input>
        <button class="search-button" type="button" onClick={handleClick}>Buscar</button>
      </form>
    </div>
}

export default SearchBar;