import React, {useState, useEffect, useContext} from "react";
import {useLocation} from 'react-router-dom'
import './singlepost.css'
import {Link} from "react-router-dom";
import axios from "axios";
import {Context} from "../../context/Context";


const SinglePost = () => {
    const {user} = useContext(Context)
    const public_folder = "https://mern-desktop-blog-backend.herokuapp.com/assets/images/"
    const [post, setPost] = useState({})
    const location = useLocation()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [updateMode, setUpdateMode] = useState(false)
    const path = location.pathname.split("/")[2]


    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`https://mern-desktop-blog-backend.herokuapp.com/api/posts/${path}`)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        fetchPost()

    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`https://mern-desktop-blog-backend.herokuapp.com/api/posts/${path}`, {
                data: {username: user.username}

            })
            window.location.replace('/')

        } catch (e) {
            console.log("single post delete:", e)
        }

    }
    const handleUpdate = async () => {
        try {
            await axios.put(`https://mern-desktop-blog-backend.herokuapp.com/api/posts/${path}`,
                {
                    username: user.username,
                    title,
                    desc
                }
            )
            setUpdateMode(false)

        } catch (e) {
            console.log("single post delete:", e)
        }
    }
    return (
        <div className={'singlePost'}>
            <div className="singlePostWrapper">
                {
                    post.photo && <img
                        src={public_folder + post.photo}
                        alt="" className="singlePostImg"/>
                }
                {updateMode ?
                    <input type={'text'} onChange={e => setTitle(e.target.value)} value={title}
                           className={'singlePostTitleInput'} autoFocus/> : (
                        <h1 className="singlePostTitle">
                            {post.title}
                            {
                                post.username === user?.username && (
                                    <div className="singlePostEdit">
                                        <i className="singlePostIcon fas fa-edit" onClick={() => setUpdateMode(true)}/>
                                        <i className="singlePostIcon fas fa-trash" onClick={handleDelete}/>
                                    </div>
                                )
                            }

                        </h1>
                    )}


                <div className="singlePostInfo">
                     <span className={'singlePostAuthor'}>
                         <Link className={'link'} to={`/?user=${post.username}`}>
                    Author: <b>{post.username}</b>

                         </Link>
                     </span>
                    <span className={'singlePostDate'}>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {
                    updateMode ? <textarea onChange={e => setDesc(e.target.value)} value={desc}
                                           className={'singlePostDescInput'}/>
                        : (
                            <p className={'singlePostDesc'}>
                                {post.desc}
                            </p>
                        )
                }
                {updateMode ? <>
                    <button className="singlePostButton" onClick={handleUpdate}>Update!</button>
                    <button className="singlePostButtonDelete" onClick={handleDelete}>Delete!</button>
                </> : null }

            </div>
        </div>
    )
}

export default SinglePost;