import { useState } from 'react';
import TextSection from '../components/TextSection';
import { useEffect } from 'react';
import TechLists from '../components/TechLists';
import { useRef } from 'react';
import UseGSAP from '../utils/useGSAP';





const Technologies = () => {

    const [ techs, setTechs ] = useState([])

    const container = useRef()

    UseGSAP(container, '.tech-class', techs)


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
            <div ref={container} className="main-section grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                {
                    techs.map((tech, index) => <TechLists classname="tech-class" tech={tech} key={index}></TechLists>)
                }
            </div>
        </div>
    );
};

export default Technologies;