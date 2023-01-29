import React, {useState} from "react";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import { BrowserRouter as Navigate, useNavigate, Link } from "react-router-dom";
function AddProduct (){

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(
        JSON.parse(localStorage.getItem("Usuario")),
    );

    const [formValues, setFormValues] = useForm({
        name: "",
        price: 0,
        description: "",
        image: "",
        category: ""
    })


    function handleClick(){
        if(formValues.name !=="" && formValues.price !== 0 && formValues.price !=="" && formValues.description !=="" && formValues.image !=="" && formValues.category !==""){
            fetch("https://marketplace-back-production.up.railway.app/api/products/"+ usuario._id, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(formValues),
            }).then((resp) =>{
                console.log(resp)
                switch (resp.status) {
                case 400:
                    Swal.fire("Ups! Parece que tus datos son inválidos");
                break;
                default:
                    Swal.fire({
                        title: "¡Felicidades!",
                        text: "¡Tu producto a sido creado!",
                        icon: "success",
                        button: "Ir a mis productos",
                    });
                }
                resp.json().then((data) =>{
                    navigate("/myproducts");
                })
                
            })
        } else {
            Swal.fire("Ups! Parece que no has llenado todos los campos.")
        }
        

    }

    return <div>
        <h1>Agregar Producto</h1>
        <form>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <label for="nombreProducto">Nombre</label>
                    <input id="nombreProducto" placeholder="Nombre" name="name" onChange={setFormValues}></input>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <label for="priceProducto">Precio</label>
                    <input id="priceProducto" type="number" placeholder="Precio" name="price" onChange={setFormValues}></input>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <label for="descriptionProduct">Descripción</label>
                    <input id="descriptionProduct" type="textBox" placeholder="Descripción" name="description"  onChange={setFormValues}></input>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <label for="priceProducto">Imagen</label>
                    <input type="text" name="image"placeholder="URL Imagen" onChange={setFormValues}></input>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <label for="category">Selecciona la categoría de tu producto:</label>
                    <select className="select-add-product" id="category" name="category" onChange={setFormValues} >
                    <option value="">Categoría</option>
                    <option value="electronicos">Electronicos</option>
                    <option value="hogar">Hogar</option>
                    <option value="moda">Moda</option>
                    <option value="mascotas">Mascotas</option>
                    <option value="deportes">Deportes</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="belleza">Belleza</option>
                    <option value="salud">Salud</option>
                    <option value="libros">Libros</option>
                    </select>
                </div>
            </div>
            
           
            
            <button className="btn-signin" onClick={handleClick} type="button">Agregar producto</button>
            

            

            
        </form>
    </div>
}

export default AddProduct;