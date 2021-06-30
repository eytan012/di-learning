import React,{useState} from "react";
import '../App.css'
import axios from "axios";

const Register = ()=>{

    const [fullName,setFullName] = useState('')
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleFullName = (e)=>{
       setFullName(e.target.value)
    }
    const handleUserName = (e)=>{
        setUserName(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }


    const sendData =  (e)=>{
        e.preventDefault()
        const registered = {
            fullName: fullName,
            userName: userName,
            email: email,
            password: password
        }
        axios.post('http://localhost:3300/api/signup',{registered})
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))

    }

    return(
        <div>
                <form method="post" onSubmit={sendData}>
                    <div className="box">
                        <h1>Register</h1>
                        <input onChange={handleFullName} className="email" placeholder={'Full Name'}/>
                        <input onChange={handleUserName} className="email" placeholder={'Username'}/>
                        <input onChange={handleEmail} className="email" placeholder={'Email'}/>
                        <input onChange={handlePassword} type="password"   placeholder={'Password'} name="password" className="email"/>
                        <button  type={"submit"}>
                            <div className="btn">Register</div>
                        </button>


                    </div>

                </form>

        </div>
    )
}

export default Register;