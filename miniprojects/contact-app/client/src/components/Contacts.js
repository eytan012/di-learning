import React, {useState} from 'react';
import './style.css'

const Contacts = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [id, setId] = useState('')

    const [contacts, setContacts] = useState([])

    const [isEditOn, setEditOn] = useState(false)
    const [isShown, setIsShown] = useState(false)

    const add = e => {
        e.preventDefault()
        const newContact = {
            name,
            number,
            id: Date.now()
        }
        setName('')
        setNumber('')
        setContacts([...contacts, newContact])
        setIsShown(!isShown)
    }

    const edit = e => {
        e.preventDefault()
        let newArr = [...contacts]
        const obj = {name, number, id}
        const editedArray = newArr.map((contact) => {
            if (contact.id === id) {
                return obj
            }
            return contact
        })
        setContacts(editedArray)
        setName('')
        setNumber('')
        setIsShown(false)
        setEditOn(false)
    }

    const deleteContact = (id) => {
        const newContactArray = contacts.filter((contact) => contact.id !== id)
        setContacts(newContactArray)
    }

    const editContact = ({name,number,id}) => {
        setIsShown(true)
        setEditOn(true)
        setName(name)
        setNumber(number)
        setId(id)
    }


    return (
        <div>
            <div className={'plusHideAndShowIcon'}>
                <i className="fas fa-plus-circle" onClick={() => setIsShown(!isShown)}/>
            </div>
            {isShown ? <form>
                Name:<input type="text" autoFocus onChange={e => setName(e.target.value)} value={name}/>
                Number:<input type="text" onChange={e => setNumber(e.target.value)} value={number}/>
                <button onClick={isEditOn ? edit : add}>{isEditOn ? 'Edit' : 'Add'}</button>
            </form> : null}



            <div className={'container'}>
                {
                    contacts.length >= 1 ? contacts.map((contact, i) => {
                        return (
                            <div className={'singleContact'} key={i}>
                                <div className={'book-card-icon'}>
                                    <i className="far fa-address-card"/>
                                </div>
                                <p><b>Contact name:</b>{contact.name}</p>
                                <p><b>Contact number:</b>{contact.number}</p>
                                <div className={'buttons'}>
                                    <button onClick={() => deleteContact(contact.id)}>Delete Contact</button>
                                    <button onClick={() => editContact(contact)}>Edit Contact</button>
                                </div>

                            </div>
                        )
                    }) : <h2>Sorry,no contacts to show.</h2>
                }
            </div>

        </div>
    );
}



export default Contacts;
