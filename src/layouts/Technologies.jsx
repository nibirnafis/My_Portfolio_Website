import { useState } from 'react';
import TextSection from '../components/TextSection';
import { useEffect } from 'react';
import TechLists from '../components/TechLists';




const Technologies = () => {

    const [ techs, setTechs ] = useState([])


    useEffect(()=>{

        const loadTechs = async () => {

            const res = await fetch('/techList.json')
            const data = await res.json()

            setTechs(data)
        }

        loadTechs()

    }, [])


    return (
        <div className="page">
            <TextSection></TextSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                {
                    techs.map((tech, index) => <TechLists tech={tech} key={index}></TechLists>)
                }
            </div>
            
        </div>
    );
};

export default Technologies;