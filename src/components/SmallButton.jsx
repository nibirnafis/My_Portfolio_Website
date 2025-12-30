import React from 'react';
import { NavLink } from 'react-router';

const SmallButton = ({url, title}) => {
    return (
        <div className="px-2 text-exsml md:text-sml text-green border border-green rounded-[11.2px]">
            <NavLink to={url} title={url}>{title}</NavLink>
        </div>
    );
};

export default SmallButton;