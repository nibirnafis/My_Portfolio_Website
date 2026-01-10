import React from 'react';
import { getRandomValues, getRandomFloat } from '../utils/randomValues';

const AnimatedIcon = ({tech}) => {

    const positionY = `${getRandomValues(448)}`
    const float = getRandomFloat(1)
    const scale = getRandomFloat(1)

    return (
        <>
        {
        <div className='animate-position' 
            style={
                {
                    position: 'relative',
                    '--y-start':  `0px`,
                    '--y-end':  `${positionY}px`
                }
            }>

            <img className='animate-icon' 
                style={ 
                    {
                    '--opacity-start': float,
                    '--opacity-end': 1,
                    '--scale-start': scale,
                    }
                } src={`/assets/icons/${tech.icon}.png`} alt="" />
        </div>
        }
        </>
    );
};

export default AnimatedIcon;