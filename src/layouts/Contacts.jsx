import { useEffect } from 'react';
import TextSection from '../components/TextSection';
import { useState } from 'react';
import Contact from '../components/Contact';

const Contacts = () => {

    const [ contacts, setContacts ] = useState([])
    
    useEffect(()=>{
        
        const loadContacts = async () => {
            const res = await fetch("/contacts.json")
            const data = await res.json()

            setContacts(data)
        }

        loadContacts()

    }, [])

    return (
        <>
        <div className="page">
            <TextSection></TextSection>
            <div className='main-section border-purple'>
            <div className="contacts">
            {
                contacts.map((contact, index) => <Contact contact={contact} key={index}></Contact>)
            }
            </div>
            </div>
        </div>
        </>
    );
};

export default Contacts;