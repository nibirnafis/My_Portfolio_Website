import { useState } from 'react';
import TextSection from '../components/TextSection';
import { useEffect } from 'react';
import Experience from '../components/Experience';
import { useRef } from 'react';
import UseGSAP from '../utils/useGSAP';

const Experiences = () => {

    const [ experiences, setExperiences ] = useState([])


    const container = useRef()

    UseGSAP(container, '.experince-class', experiences)

    useEffect(()=>{
        
        const loadExperiences = async () => {
            const res = await fetch("/experiences.json")
            const data = await res.json()

            setExperiences(data)
        }

        loadExperiences()

    }, [])
    


    return (
        <>
        <div className="page">
            <TextSection></TextSection>
            <div ref={container} className="main-section">
            {
                experiences.map((experience, index) => <Experience className='experince-class' experience={experience} key={index}></Experience>)
            }
            </div>
        </div>
        </>
    );
};

export default Experiences;