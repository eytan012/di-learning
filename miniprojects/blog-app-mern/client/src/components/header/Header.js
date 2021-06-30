import React from "react";
import './header.css'

const Header = () => {
    return (
        <div className={'header'}>
            <div className="headerTitles">
                <span className={'headerTitleSm'}>React & Node</span>
                <span className={'headerTitleLg'}>Tech-Blog</span>
            </div>
            <img className={'headerImg'} src="
            https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
            " alt=""/>
        </div>
    )
}

export default Header;