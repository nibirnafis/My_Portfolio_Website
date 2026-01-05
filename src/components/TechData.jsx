import React from 'react';

const TechData = ({tech}) => {

    const { name, icon } = tech

    return (
        <>
        <div className='flex justify-start items-center gap-2 '>
            <img className='w-4 md:w-6' src={`/assets/icons/${icon}.png`} alt="" />
            <p className='text-left text-exsml md:text-sml tracking-wide'>{name}</p>
        </div>
        </>
    );
};

export default TechData;