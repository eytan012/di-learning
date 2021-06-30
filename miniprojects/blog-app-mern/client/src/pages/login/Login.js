import React, {useContext, useRef} from "react";
import './login.css'
import {Link} from "react-router-dom";
import {Context} from "../../context/Context";
import axios from "axios";

const Login = () => {

    const userRef = useRef()
    const passwordRef = useRef()
    const { dispatch, isFetching} = useContext(Context)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"});
        try{
             const res = await axios.post('https://mern-desktop-blog-backend.herokuapp.com/api/auth/login',{
                 username:userRef.current.value,
                 password:passwordRef.current.value,
             })
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        }catch (e) {
            dispatch({type:"LOGIN_FAILURE"});
        }
    }

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
           <form className={'loginForm'} onSubmit={handleSubmit}>
               <label>Username</label>
               <input required ref={userRef} className={'loginInputes'} type="text" placeholder={'Enter Username'}/>
               <label>Password</label>
               <input required ref={passwordRef} className={'loginInputes'} type="password" placeholder={'Enter Password'}/>
               <button type={"submit"} className={'loginButton'} disabled={isFetching}>Login</button>
               <button className={'loginRegisterButton'}>
                   <Link className={'link'} to={'/register'}>Register</Link>
               </button>
           </form>
        </div>
    )
}

export default Login;