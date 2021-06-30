import React, {useContext, useState} from "react";
import './write.css'
import axios from "axios";
import {Context} from "../../context/Context";

const Write = () => {
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [file,setFile] = useState(null)
    const {user} = useContext(Context)

    const handleSubmit = async e =>{
        e.preventDefault()
        const newPost = {
            username:user.username,
            title,
            desc,
        }
        if (file){
            const data = new FormData();
            const filename = Date.now() + file.name;

            data.append("name",filename)
            data.append("file",file)
            newPost.photo  = filename;
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            try{
                await axios.post('https://mern-desktop-blog-backend.herokuapp.com/api/upload',data,config)
            }catch (e) {
                console.log(e)
            }
        }
        try{
           const res =  await axios.post('https://mern-desktop-blog-backend.herokuapp.com/api/posts',newPost)
            window.location.replace('/post/'+res.data._id)

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="write">
            {
                file && (
                    <img className={'writeImg'} src={URL.createObjectURL(file)} alt=""/>
                )
            }
            <form className={'writeForm'} onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor='fileInput'>
                        <i className="writeIcon far fa-plus-square"/>
                    </label>
                    <input type="file" accept="image/*" onChange={(e)=>setFile(e.target.files[0])} id={'fileInput'} style={{display: 'none'}}/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder={'Title'} className={'writeInput'} autoFocus={true}/>

                </div>
                <div className="writeFormGroup">
                    <textarea className={'writeInput'}  onChange={(e)=>setDesc(e.target.value)} placeholder={'Tell your story'}>
                    </textarea>
                </div>
                <button type={"submit"} className={'writeSubmit'}>Publish!</button>
            </form>
        </div>
    )
}

export default Write;