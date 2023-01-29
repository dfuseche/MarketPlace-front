import React from "react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
function DeleteButton(props){

    const [usuario, setUsuario] = useState(
        JSON.parse(localStorage.getItem("Usuario")),
    );


    const deleteProduct = async () => {
            const res = await fetch("https://marketplace-back-production.up.railway.app/api/products/"+usuario._id+"/"+props.idProduct, {
                method: 'DELETE'
            })
            .then((response)=> response.json())
            .then((data) => {
                return data;
            })
    }
  

    function handleClick (){
        Swal.fire({
            title: '¿Estás seguro/a?',
            text: "¡No vas a poder revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, ¡borrarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteProduct();  
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              window.location.reload();
            }
          })
    }

    return <button className="btn-eliminar" onClick={handleClick}>Eliminar producto</button>;
}
export default DeleteButton;