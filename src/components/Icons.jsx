import React from 'react';

const Icons = ({icon}) => {
    return (
        <>
        <div className='w-6'>
            <img src={`/assets/icons/${icon}.png`} alt="" title={icon} />
        </div>
        </>
    );
};

export default Icons;