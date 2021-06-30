import React, {useContext} from "react";
import {Link} from "react-router-dom";
import './post.css'
import {Context} from "../../context/Context";

const Post = ({post}) => {
    const {user} = useContext(Context)
    const public_folder = "https://mern-desktop-blog-backend.herokuapp.com/assets/images/"
    const blank_profile_image = "https://via.placeholder.com/450"
    return (
        <div className={'post'}>
            { post.photo && (
            <img className={'postImg'}
                 src={public_folder + post.photo}
                 alt=""/>
            )}
            <div className="postInfo">
                <div className="postCats">
                    {
                        post.categories.map((cat)=>{
                        return <span className="postCat">{cat.name}</span>
                        })
                    }
                </div>
                <Link to={`/post/${post._id}`} className={'link'}>
                <span className="postTitle">
                    {post.title}
                </span>
                </Link>

            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {post.desc}
            </p>
        </div>

    )
}

export default Post;