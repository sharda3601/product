import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
function Protected(props) {
    let Navigate = useNavigate();
        const { Component } = props;
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login)
        Navigate('/login')
    });
    return ( 
        <>
        <Component></Component>
        </>
     );
}

export default Protected;