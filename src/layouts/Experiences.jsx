import { useState } from 'react';
import TextSection from '../components/textSection';
import { useEffect } from 'react';
import Experience from '../components/Experience';

const Experiences = () => {

    const [ experiences, setExperiences ] = useState([])

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
            <div className="flex flex-col gap-8">
            {
                experiences.map((experience, index) => <Experience experience={experience} key={index}></Experience>)
            }
            </div>
        </div>
        </>
    );
};

export default Experiences;