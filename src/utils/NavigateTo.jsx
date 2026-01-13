import { useLocation, useNavigate } from 'react-router';



const NavigateTo = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const routes = [ "/", "/technologies", "/projects", "/experience", "/contact" ]
    const index = routes.indexOf(location.pathname)

    
    const removeListner = () => {
        window.removeEventListener('keydown', useArrow)
    }


    const useArrow = (event) => {
        
        if(event.key === 'ArrowRight'){
            if(index < (routes.length-1)){
                navigate(routes[index+1])
                removeListner()
            }
        }else if(event.key === 'ArrowLeft'){
            if(index > 0){
                navigate(routes[index-1])
                removeListner()
            }
        }

    }

    
    
    return window.addEventListener('keydown', useArrow)
};

export default NavigateTo;