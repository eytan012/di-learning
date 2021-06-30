import React from "react";

const Post = (props) =>{
    const {posts,header} = props;
    return(
        <div>
            <h2>{header}</h2>
            {
                posts.map((item)=>{
                    return <p key={item.id}>{item.body}</p>
                })
            }
        </div>
    )

}

export default Post;