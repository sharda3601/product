import React from "react";
import { context } from "./UserContext";

function UpdateButton() {
    return ( 
        <>
        <context.Consumer>
            {
                ({up})=>{
                    <button onClick={()=>up()}>change color</button>

                }
            }

        </context.Consumer>
        </>
     );
}

export default UpdateButton;