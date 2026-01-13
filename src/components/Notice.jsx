import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Notice = () => {

    const [ isVisible, setIsVisible ] = useState(false)


    useEffect(()=>{
        setTimeout(() => setIsVisible(true), 1000)
        setTimeout(() => setIsVisible(false), 8000)
    }, [])

    return (
        <div className={`w-full hidden md:flex justify-center mx-auto fixed top-0 right-8 transition-transform delay-300 duration-500 ${isVisible ?  'translate-y-8' : '-translate-y-full'}`}>
            <p className='text-white bg-red text-sml py-2 px-4 rounded-lg'>Use {'<'} {'>'} To Navigate Pages</p>
        </div>
    );
};

export default Notice;