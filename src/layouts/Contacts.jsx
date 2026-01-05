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
            <div className='main-section grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4'>
            {
                contacts.map((contact, index) => <Contact contact={contact} key={index}></Contact>)
            }
            </div>
        </div>
        </>
    );
};

export default Contacts;