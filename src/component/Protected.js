import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
    const User = props.Cmp;
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/')
        }else{
            navigate('/login')
        }
        
    },[])

    return ( 
        <>
        <User/>
        </>
     );
}

export default Protected;