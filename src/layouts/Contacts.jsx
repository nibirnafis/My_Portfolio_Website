import { useEffect } from 'react';
import TextSection from '../components/TextSection';
import { useState } from 'react';
import Contact from '../components/Contact';
import UseGSAP from '../utils/UseGSAP';
import { useRef } from 'react';

const Contacts = () => {

    const [ contacts, setContacts ] = useState([])

    const container = useRef()

    UseGSAP(container, '.contact-class', contacts)

    
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
            <div ref={container} className='main-section grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4'>
            {
                contacts.map((contact, index) => <Contact  className="contact-class" contact={contact} key={index}></Contact>)
            }
            </div>
        </div>
        </>
    );
};

export default Contacts;