import React,{useState} from "react";
import {useLocation} from 'react-router-dom';
import Fetch from "./Fetch";
import Post from "./Post";
import Main from './Main';
import UpdateButton from './Updatebutton';
import { context } from './UserContext';


function Home() {
   // const location = useLocation();
    //console.log(location);

    const[color, setColor] = useState("green");
    return ( 
        <>
         <context.Provider value={color}>
         <h1>Home</h1>

              <Main></Main>
              <UpdateButton></UpdateButton>
              </context.Provider>
        <Fetch></Fetch>
        <Post></Post>
        </>
     );
}

export default Home;