import React from "react";
import {NavLink} from "react-router-dom";
import '../App.css'


const Navbar = ()=>{
    return(
        <nav>
            <ul>
                <li><NavLink exact to="/login">Login</NavLink></li>
                <li><NavLink exact to="/register">Register</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar