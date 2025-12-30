export const colorDefiner = (path) => {

    if(path === '/'){
        return "text-red"
    }else if(path === '/technologies'){
        return "text-orange"
    }else if(path === '/projects'){
        return "text-green"
    }else if(path === '/experience'){
        return "text-blue"
    }else if(path === '/contact'){
        return "text-purple"
    }

}