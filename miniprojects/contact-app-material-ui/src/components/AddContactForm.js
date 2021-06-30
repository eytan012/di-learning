import React, {useState,useEffect} from 'react';
import './styles.css'

const AddContactForm = ({addContact,editedContact,addEditedContact}) => {
    const [fullName, setFullName] = useState('')
    const [number, setNumber] = useState('')
    const [location, setLocation] = useState(null)

    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const {latitude, longitude} = position.coords;
                fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=1f6ad9d08bc548d9ac897c4ac57c230d`)
                    .then(response => response.json()
                        .then(data=>setLocation(data.results[0].formatted)))
            })
        }
        console.log('use effect:',editedContact)
    },[editedContact])


    useEffect(()=>{
        if (editedContact){
            setFullName(editedContact.fullName)
            setNumber(editedContact.number)
        }
    },[editedContact])


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!editedContact){
            const newObj = {fullName, number,location, id: Date.now()}
            addContact(newObj)
        } else {
            const editedObj ={fullName,number,id:editedContact.id}
            addEditedContact(editedObj)
        }
    }


    return (
        <form onSubmit={handleSubmit} className={'addContactForm'}>
            <input onChange={(e) => setFullName(e.target.value)}
                   type="text"
                   placeholder={'Enter Full Name'}
                   value={fullName}
            />

            <input onChange={(e) => setNumber(e.target.value)}
                   type="tel"
                   placeholder={'Enter Phone number'}
                   value={number}
            />

            <div className={'addBtn'}>
                <button type={"submit"}>{editedContact ? 'Edit' :'Add'}</button>
            </div>
        </form>
    );
};

export default AddContactForm;
