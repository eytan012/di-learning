import React, {useContext,useState} from "react";
import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar";
import {Context} from "../../context/Context";
import axios from "axios";


const Settings = () => {

    const {user,dispatch} = useContext(Context)
    const [file,setFile] = useState(null)
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [updated,setUpdated] = useState(false)

    const public_folder = "https://mern-desktop-blog-backend.herokuapp.com/assets/images/"
    const blank_profile_image = "https://via.placeholder.com/150"


    const handleUpdate = async e =>{
        e.preventDefault()
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userId:user._id,
            username,
            email,
            password
        }
        if (file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename)
            data.append("file",file)
            updatedUser.profilePicture  = filename;
            try{
                await axios.post('https://mern-desktop-blog-backend.herokuapp.com/api/upload',data)
            }catch (e) {
                console.log(e)
            }
        }
        try{
            const res = await axios.put(`https://mern-desktop-blog-backend.herokuapp.com/api/users/${user._id}`,updatedUser)
            setUpdated(true)
            dispatch({type:"UPDATE_SUCCESS",payload:res.data})

        } catch (e) {
            console.log(e)
            dispatch({type:"UPDATE_FAILURE"})

        }
    }
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete Your Account
                    </span>
                </div>

                <form className="settingsForm" onSubmit={handleUpdate}>
                    <label>Profile Picture</label>
                    <div className="settingsProfilePicture">
                        <img
                            src={file ? URL.createObjectURL(file) :public_folder+user.profilePicture ? blank_profile_image : null}
                            alt=""/>
                        <label htmlFor={'fileInput'}>
                            <i className="settingsPPIcon far fa-user"/>
                        </label>
                        <input type="file"  accept="image/*" onChange={(e)=>setFile(e.target.files[0])} id={'fileInput'} style={{display: 'none'}}/>
                    </div>
                    <label>Username</label>
                    <input required type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input required type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                    <label>New Password</label>
                    <input required type="password"  onChange={e=>setPassword(e.target.value)}/>
                    <button className="settingsSubmit" type={"submit"}>Update</button>
                </form>
                {updated ? <p className={'updated'}>User has been successfully updated!</p> : null}


            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings