import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "pages/Home";
import Product from "pages/Product";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import Login from "pages/Login";
import ViewProduct from "pages/ViewProduct";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Product/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/product/:slug" element={<ViewProduct/>}/>
            </Routes>
        </Router>
    );
}
export default App;