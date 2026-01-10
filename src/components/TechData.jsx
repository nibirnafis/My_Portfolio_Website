import React from 'react';

const TechData = ({tech}) => {

    const { name, icon } = tech

    return (
        <>
        <div className='flex justify-start items-center gap-2 '>
            <img className='w-4' src={`/assets/icons/${icon}.png`} alt="" />
            <p className='text-left text-exsml md:text-sml tracking-wide font-light'>{name}</p>
        </div>
        </>
    );
};

export default TechData;