import React, {useState} from 'react';
import './contactUs.css'
import axios from "axios";

const ContactUs = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [about,setAbout] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const obj = {name,email,about}
       axios.post('https://mern-desktop-blog-backend.herokuapp.com/api/nodemailer',obj)
           .then((res)=>{
               if (res.data.status === 'success'){
                   alert('message sent!')
               } else if (res.data.status === 'fail'){
                   alert('message failed to send')
               }
           })
    }

    return (
        <form onSubmit={handleSubmit}>
            Full Name: <input required type="text" onChange={(e)=>setName(e.target.value)}/>
            Email: <input required type="email" onChange={(e)=>setEmail(e.target.value)}/>
            What do you want to talk about? <textarea required  onChange={(e)=>setAbout(e.target.value)}/>
            <button type={"submit"}>Send!</button>
        </form>
    );
};

export default ContactUs;
