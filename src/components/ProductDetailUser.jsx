import React from "react";
import { useState, useEffect } from "react";

function ProductDetailUser(){

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);
    const product = JSON.parse(localStorage.getItem("DetailProduct"));
    useEffect(()=> {
        const fetchUser = async () => {
            setLoading(true);
            const res = await fetch("http://localhost:3000/api/products/detailProduct/"+product._id)
            .then((response)=> response.json())
            .then((data) => {
                return data;
            })
            setUser(res);
            setLoading(false);
      }
        fetchUser();
    }, []);

    if(loading){
        return <div>Loading User info ...</div>
    }
    else{
        return <div className="row">
            <h1>Información del usuario:</h1>
            <div className="col-6">
                <h2>Nombre:</h2>
                <h2>{user.fName} {user.lName}</h2>
                <h2>Celular:</h2>
                <h2>{user.telephone}</h2>
            </div>
            <div className="col-6">
                <h2>Dirección:</h2>
                <h2>{user.address}</h2>
                <h2>Correo:</h2>
                <h2>{user.email}</h2>
            </div>
            
            

        </div>
    }

    
}

export default ProductDetailUser;