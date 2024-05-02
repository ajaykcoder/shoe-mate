import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "pages/Home";
import Product from "pages/Product";
import AboutUs from "pages/AboutUs";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Product/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
            </Routes>
        </Router>
    );
}
export default App;