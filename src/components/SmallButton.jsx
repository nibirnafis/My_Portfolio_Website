import React from 'react';
import { NavLink } from 'react-router';

const SmallButton = ({url, title}) => {
    return (
        <div className="px-2 text-exsml lg:text-sml text-green">
            <NavLink to={url} title={url}>{title}</NavLink>
        </div>
    );
};

export default SmallButton;