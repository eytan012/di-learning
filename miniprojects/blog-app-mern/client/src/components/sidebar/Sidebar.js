import React, {useState, useEffect} from "react";
import './sidebar.css'
import axios from "axios";
import {Link} from "react-router-dom";

const Sidebar = () => {
    const [categories, setCategories] = useState([])

    useEffect( ()=>{
        const getCats = async ()=>{
            const res = await axios.get('https://mern-desktop-blog-backend.herokuapp.com/api/categories')
            setCategories(res.data)
        }
        getCats()
    },[])
    const blank_pic = "https://via.placeholder.com/250x250.png?text=Imagine+a+picture+of+me"

    return (
        <div className={'sidebar'}>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className={'sidebarImgAbout'}
                     src={blank_pic}
                     alt=""/>
                <span id={'aboutMe'}>
                    <b>Hello everyone!</b>
                     My name is Eytan Sayada. I'm 25 years old and I'm a Full-Stack web developer.
                    <br/>
                    <b>WEBSITE STACK:</b> Frontend- React and custom CSS.
                    Backend: Nodejs and MongoDB.
                    <br/>
                     <b>MY STACK:</b> Javascript,React,Vuejs,Firebase,MongoDB, Nodejs,Postgresql,git.
                </span>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {
                        categories.map((cat,i)=>{
                            return(
                                <Link key={i} to={`/?category=${cat.name}`} className={'link'}>
                               <li  className="sidebarListItem">{cat.name}</li>
                                </Link>
                            )

                        })
                    }

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <ul className="sidebarSocial">
                    <i className="sideBarIcon fab fa-facebook-f"/>
                    <i className="sideBarIcon fab fa-linkedin"/>
                    <i className="sideBarIcon fab fa-github"/>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;