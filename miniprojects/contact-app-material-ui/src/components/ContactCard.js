import React from 'react';
import './styles.css'

const ContactCard = ({contact,deleteContactById,handleEdit}) => {


    const handleDelete = (contact) => {
        deleteContactById(contact.id)
    }

    return (
        <div className={'contactCard'}>
            <p>{contact.fullName}</p>
            <div>{contact.location ?
                <div>
                <p><i className="locationIcon fas fa-location-arrow"/>{contact.location}</p>
                </div>
             : null}</div>
            <p>{contact.number}</p>
            <div className={'cardButtons'}>
                <button onClick={()=>handleEdit(contact)}>Edit</button>
                <button onClick={()=>handleDelete(contact)}>Delete</button>
            </div>
        </div>
    );
};

export default ContactCard;
