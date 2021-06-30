import {useState} from "react";
import Header from "./components/Header";
import AddContactForm from "./components/AddContactForm";
import ContactsList from "./components/ContactsList"
import ModalLocation from "./components/ModalLocation";


function App() {

    const [contacts, setContacts] = useState([
        {
            fullName: 'Eytan',
            number: '0526648232',
            id: 123
        },
        {
            fullName: 'David',
            number: '0537718232',
            id: 1234
        },

    ])

    const [editedContact, setEditedContact] = useState(null)

    const [contactObj, setContactObj] = useState({})

    const [isEdited, setIsEdited] = useState(false)

    const addContact = (contactObj) => {
        setContacts([...contacts, contactObj])
    }

    const deleteContactById = (contactId) => {
        const newContactsArray = contacts.filter((contact) => {
            return contact.id !== contactId
        })
        setContacts(newContactsArray)
    }
    const handleEdit = (contact) => {
        setEditedContact(contact)
        setIsEdited(true)
    }

    const addEditedContact = (editedContactObj) => {
        const editedContact = contacts.find((contact) => {
            return contact.id === editedContactObj.id
        })
        editedContact.fullName = editedContactObj.fullName
        editedContact.number = editedContactObj.number
        setContacts([...contacts])
    }

    return (
        <div>
            <Header/>
            <AddContactForm addContact={addContact}
                            contacts={contacts}
                            setContactObj={setContactObj}
                            editedContact={editedContact}
                            isEdited={isEdited}
                            setIsEdited={setIsEdited}
                            addEditedContact={addEditedContact}
            />

            <ContactsList contacts={contacts}
                          deleteContactById={deleteContactById}
                          handleEdit={handleEdit}
            />

        </div>
    );
}

export default App;
