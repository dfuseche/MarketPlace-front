import React, {useState} from "react";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Signin from "./components/Signin";
import MyProducts from "./components/MyProducts";
import AddProduct from "./components/AddProduct";
import ProductDetail from "./components/ProductDetail";
function App() {

 
  
  const [usuario, setUsuario] = useState(
    JSON.parse(localStorage.getItem("Usuario"))
  );

  return (
    <div className="App">
      <div className="allButFooter">
        <Navbar />
        <div className="row">
          <div className="col-4 categories-nav">
            <Categories />
          </div>
          <div className="col-4 categories-nav">
            {usuario !== null ?usuario.fName === undefined? null: <h5 ><a href="/myproducts">Mis productos</a></h5>: null} 
          </div>
        </div>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue/>} />
            <Route path="/catalogue/:categoria" element={<Catalogue/>} />
            <Route path="/signin" element={<Signin setUsuario={setUsuario}/>} />
            <Route path="/register" element={<Register setUsuario={setUsuario}/>} />
            <Route path="/myproducts" element={<MyProducts usuario = {usuario}/>} />
            <Route path="/addproduct" element={<AddProduct/>} />
            <Route path="/detailproduct" element={<ProductDetail/>}/>
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Router>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
