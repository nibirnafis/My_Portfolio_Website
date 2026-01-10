import { useLocation } from "react-router";
import { colorDefiner } from "../utils/colorDefiner";
import { useEffect } from "react";
import { useState } from "react";

const TextSection = () => {

    const location = useLocation()
    const color = colorDefiner(location.pathname)

    const [ page, setPage ] = useState(null)

    useEffect(()=>{

        const loadPages = async() => {
            const res = await fetch('/texts.json')
            const data = await res.json()
            
            const page = data.find(page => page.path === location.pathname)
            setPage(page)
        }

        loadPages()

    }, [location.pathname])


    return (
        <>
        { 
        page &&
        <div className='text-section'>
            <p className={`text-section-title ${color}`}>{page.section_title.toUpperCase()}</p>
            <p className='text-title'>{page.title}</p>
            <p className='text-detail'>{page.detail.toUpperCase()}</p>
            <p className='text-section-paragraph'>{page.section_paragraph}</p>
        </div>
        }
        </>
    );
    
};

export default TextSection;