import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className={'nav-wrapper red darken-3'}>
                <Link className="brand-logo left" to="/">My Blog</Link>

                <div className={'container'}>
                    <ul className="right">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;