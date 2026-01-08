import { useEffect } from 'react';
import { useState } from 'react';
import AnimatedIcon from './animatedIcon';

const IconsAnimation = () => {
    const [ techs, setTechs ] = useState([])


    useEffect(()=>{

        const loadTechs = async () => {

            const res = await fetch('/allIcons.json')
            const data = await res.json()

            setTechs(data)
        }

        loadTechs()

    }, [])



    return (
        <div className="h-full flex justify-between">
            {
                techs.map((tech, index) => <AnimatedIcon tech={tech} key={index}></AnimatedIcon>)
            }
        </div>
    );
};

export default IconsAnimation;