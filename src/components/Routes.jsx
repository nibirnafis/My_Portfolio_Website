import { useEffect } from 'react';
import { useState } from 'react';
import Route from './Route';

const Routes = () => {

    const [ routes, setRoutes ] = useState([])
    
        useEffect(()=>{
            
            const loadRoutes = async () => {
                const res = await fetch("/routes.json")
                const data = await res.json()
    
                setRoutes(data)
            }
    
            loadRoutes()
    
        }, [])

    return (
        <div className='flex justify-around items-end'>
            {
                routes.map((route, index) => <Route route={route} key={index}></Route>)
            }
        </div>
    );
};

export default Routes;