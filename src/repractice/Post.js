import React, { useState } from "react";
import axios from "axios";

function Post() {
    const[id, setId] = useState(0);
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');

    /*function saveData(){
        const data = {id, title, body};
     fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(data)
     }).then((result)=>
    result.json()).then((response)=>
    console.log(response)).catch(err=>
        console.log(err)
    )
    } */

   /* async function saveData(){
        try{
        let data = {id, title, body};
           let res = await fetch("https://jsonplaceholder.typicode.com/posts",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(data)
            })
            let result = await res.json();
            console.log(result);
        }catch(err){
            console.log(err);
        }
    }*/

      /*  function saveData(){
            const data = {id, title, body};
            axios.post("https://jsonplaceholder.typicode.com/posts", data)
            .then((response)=>{
                console.log(response)
            }).catch((err)=>
            console.log(err))
        } */


           async function saveData(){
            let data = {id, title, body}
                try{
                    let res = await axios.post("https://jsonplaceholder.typicode.com/posts", data)
                    console.log(res);        
                }catch(err){
                    console.log(err);
                }
            }
    return ( 
        <>
        <form className="shadow w-50 p-3 m-5 border mx-auto">
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)}></input><br/>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input><br/>
        <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}></input><br/>
        <button onClick={saveData}>Save Data</button>
        </form>
        </>
     );
}

export default Post;