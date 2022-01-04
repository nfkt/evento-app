import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";


function Paths() {

   

    return (
        <BrowserRouter>
        

            <Routes>
                
            <Route path="/" element={<Login />} exact />
            <Route path="/user/" element={<Home />} exact />
            
            

            </Routes>
        </BrowserRouter>
    )
}

export default Paths;