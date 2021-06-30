import React, {useContext} from "react";
import './topbar.css'
import {Link} from "react-router-dom";
import {Context} from "../../context/Context";

const TopBar = () => {
    const {user, dispatch} = useContext(Context)
    const public_folder = "https://mern-desktop-blog-backend.herokuapp.com/assets/images/"
    const blank_profile_image = "https://via.placeholder.com/150"

    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
        window.location.replace('/')
    }
const links = {
        facebook: 'https://www.facebook.com/eytansayada',
        linkedin:'https://www.linkedin.com/in/eytan-sayada-8a47a61bb/',
        github:'https://github.com/eytan012'
}
    return (
        <div className={'top'}>
            <div className="topLeft">
                <a href={links.facebook} target="_blank">
                    <i className="topIcon fab fa-facebook-f"/>
                </a>
                <a href={links.linkedin} target="_blank">
                    <i className="topIcon fab fa-linkedin"/>

                </a>
                <a href={links.github} target="_blank">
                    <i className="topIcon fab fa-github"/>

                </a>
            </div>
            <div className="topCenter">
                <ul className={'topList'}>
                    <li className={'topListItem'}>
                        <Link className={'link'} to={'/'}>HOME</Link>
                    </li>
                    <li className={'topListItem'}>
                        <Link className={'link'} to={'/about'}>ABOUT</Link>
                    </li>
                    <li className={'topListItem'}>
                        <Link className={'link'} to={'/contact'}>CONTACT</Link>
                    </li>
                    <li className={'topListItem'}>
                        <Link className={'link'} to={'/write'}>WRITE</Link>
                    </li>
                    <li className={'topListItem'} onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>

                </ul>
            </div>
            <div className="topRight">
                {
                    user ?
                        (
                            <Link to={'/settings'}>
                            <img className={'topImg'}
                                 src={user.profilePicture ? public_folder+user.profilePicture : blank_profile_image}
                                 alt=""/>
                            </Link>
                        )
                        :
                        (
                            <ul className={'topList'}>
                                <li className={'topListItem'}>
                                    <Link className={'link'} to={'/login'}>LOGIN</Link>
                                </li>
                                <li className={'topListItem'}>
                                    <Link className={'link'} to={'/register'}>REGISTER</Link>
                                </li>
                            </ul>
                        )
                }
            </div>
        </div>
    )
}


export default TopBar;