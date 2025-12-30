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
            <div className='main-section border-orange'>
                <div className='tech-stack'>
                    {
                        techs.map((tech, index) => <TechLists tech={tech} key={index}></TechLists>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Technologies;