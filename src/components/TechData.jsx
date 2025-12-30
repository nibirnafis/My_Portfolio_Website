import React from 'react';

const TechData = ({tech}) => {

    const { name, icon } = tech

    return (
        <>
        <div className='flex justify-start items-center gap-2 md:gap-4'>
            <img className='w-6' src={`/src/assets/icons/${icon}.png`} alt="" />
            <p className='text-left text-exsml md:text-sml tracking-wide'>{name}</p>
        </div>
        </>
    );
};

export default TechData;