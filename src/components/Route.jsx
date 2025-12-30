import React from 'react';
import { NavLink } from 'react-router';
import { useLocation } from 'react-router-dom';

const Route = ({route}) => {

    const location = useLocation()

    const { title, path, color } = route

    return (
        <div className={location.pathname === path ? `${color} flex justify-center items-center rounded-t-md w-full h-10 md:h-12` : `${color} flex justify-center items-center w-full h-6`}>
            <NavLink className="w-full text-white text-center font-Amaranth tracking-widest text-exsml md:text-sml font-light" to={path}>{title.toUpperCase()}</NavLink>
        </div>

    );
};

export default Route;