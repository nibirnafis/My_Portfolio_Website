import React from 'react';
import { NavLink } from 'react-router';

const Contact = ({contact}) => {

    const {icon_url, info } = contact
    return (
        <>
        <div className='flex flex-col gap-2 items-center '>
            <NavLink>
                <img className='max-h-[64px] md:max-h-[128px] ' src={icon_url} alt="" />
            </NavLink>
            <p className='text-exsml md:text-sml text-center'>{info}</p>
        </div>
        </>
    );
};

export default Contact;