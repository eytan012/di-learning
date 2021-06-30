import React, {useState} from "react";
import './register.css'
import {Link} from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post('https://mern-desktop-blog-backend.herokuapp.com/api/auth/register',
                {username, email, password}
            )
            if (res.data) {
                window.location.replace('/login')
            }

        } catch (e) {
            setError(true)
            console.log(e)
        }
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className={'registerForm'} onSubmit={handleSubmit}>
                <label>Username</label>
                <input required className={'registerInputes'} onChange={(e) => setUsername(e.target.value)} type="text"
                       placeholder={'Enter Username'}/>
                <label>Email</label>
                <input required className={'registerInputes'} onChange={(e) => setEmail(e.target.value)} type="email"
                       placeholder={'Enter Email'}/>
                <label>Password</label>
                <input required className={'registerInputes'} onChange={(e) => setPassword(e.target.value)} type="password"
                       placeholder={'Enter Password'}/>
                <button className={'registerButton'}>Register</button>

            </form>
            <button className={'registerLoginButton'}>
                <Link className={'link'} to={'/login'}>Login</Link>
            </button>
            {error ? <h3 style={{color:'red'}}>Something went wrong. Username/Email Taken..</h3> : null}
        </div>
    )
}

export default Register;