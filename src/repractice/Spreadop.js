import React, { useState } from "react";


function Spreadop() {
    const [data, setData] = useState([
        {
            name : '',
            email : ''
        }
    ]);


    return ( 
        <>
         <input type="text"  onChange={(e)=>setData({...data, name :e.target.value })}></input>
         <input type="text" onChange={(e)=>setData({...data, email : e.target.value})}></input>
         <h2>name : {data.name}</h2>
         <h2>email : {data.email}</h2>
        </>
     );
}

export default Spreadop;