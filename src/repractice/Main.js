import React from "react";
import { context } from "./UserContext";

function Main() {
    return ( 
        <>
        <context.Consumer>
            {
                function up({color}){
                    <h1 style={{backgroundColor : color}}>Hello this is main page</h1>
                }
            }
        </context.Consumer>
        </>
     );
}

export default Main;