import React from "react";
import '../App.css'
const Navbar = () =>{
    return(
        <nav>
            <h2>React Router</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/shop">Shop</a></li>
            </ul>
        </nav>

    )
}

export default Navbar;