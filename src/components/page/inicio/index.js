import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio">   
            <Link to="/">
            <h1>home</h1>
            </Link>
            <Link to="/productos">
            <h1>Productos</h1>
            </Link>
            <img src={Portada} alt=""/>
        </div>
    )
}
