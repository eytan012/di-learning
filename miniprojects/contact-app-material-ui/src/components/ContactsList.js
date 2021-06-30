import React from 'react';
import './styles.css'
import ContactCard from "./ContactCard";

const ContactsList = ({contacts,deleteContactById,handleEdit}) => {
    const renderedContacts = contacts.map((contact,i)=>{
        return(
            <ContactCard  key={i} contact={contact} deleteContactById={deleteContactById} handleEdit={handleEdit}/>
        )
    })
    return (
        <div className={'container'}>
        {contacts ? renderedContacts : null}
        </div>

    );
};

export default ContactsList;
