import React,{useState,useEffect} from "react";
import  './contact.css'
import axios from 'axios'
import ContactUs from "../../components/contactus/ContactUs";

const Contact = ()=>{

    return (
        <>
            <div className="contact">
        <ContactUs/>
            </div>
        </>

    )
}

export default Contact;