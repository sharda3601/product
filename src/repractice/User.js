import React from "react";
import {useParams, useSearchParams, useNavigate, Navigate} from 'react-router-dom';
import Spreadop from "./Spreadop";

function User() {
    const param = useParams();
    const[searchParam, setSearchParam] = useSearchParams();
    let { name }= param;
    console.log(name);
    console.log(searchParam);
    const Navigate = useNavigate();

   let x= true;
    function update(url){
    
            Navigate(url)
    }
    return ( 
        <>
        <h1>this is {name}'s page</h1>
        <button onClick={()=>update('/')}>Go To About</button>
        <button onClick={()=>update('/about')}>Go To User</button>
        <br></br>
        <Spreadop></Spreadop>
        </>
     );
}

export default User;