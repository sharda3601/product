import React,{useEffect, useState, useRef} from "react";


function About(props) {

    const lastval = useRef();

    useEffect(()=>{
        lastval.current = props.count;
    })
    const r = lastval.current;
    //const[count, setCount] = useState(0);
    //let txt = "";
    /*function update(){
    let rend = Math.floor(Math.random()*10);
        setCount((prev)=>{
            console.log(prev);
            if(prev > rend){
                console.log("prev is greater than rend")
            }
            return rend;

        }    );
            for(let i = 0; i< 5; i++){
                setCount(count  + 1)
            }
    }*/


    return ( 
        <>
        <h1>About us</h1>
        <button onClick={props.update}>Click me</button> 
        <p>current count :{props.count}</p>
        <p>previous count : {r}</p>
        <p></p>
        </>
     );
}

export default About;