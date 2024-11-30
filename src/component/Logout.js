import React from "react";
import {useNavigate} from 'react-router-dom';

function Logout(props) {

    const logout = () =>{
        const navigate = useNavigate();
        localStorage.clear();
            navigate('/login'); 
    }
   
    return ( 
        <>
        </>
     );
}

export default Logout;