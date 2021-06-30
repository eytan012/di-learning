import React,{useState,useEffect} from "react";
import  './home.css'
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from 'axios'
import {useLocation} from "react-router-dom";

const Home = ()=>{
    const {search}  = useLocation()

    const [posts,setPosts] = useState([])
    useEffect(()=>{
      const fetchPosts = async ()=>{
          const res = await axios.get(`https://mern-desktop-blog-backend.herokuapp.com/api/posts/${search}`)
          setPosts(res.data)
      }
      fetchPosts()
    },[search])


    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar/>
            </div>
        </>

    )
}

export default Home;