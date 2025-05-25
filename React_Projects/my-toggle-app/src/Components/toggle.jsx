import React from "react";
import { useState } from "react";

function Toggle(){
    const [state,setState]=useState(false)
    return(
        <>
        <p style={{color:state==true?"green":"red"}}>Color Change</p>
        <button onClick={()=>setState(!state)}>{state?"ON":"OFF"}</button>
        </>
    )
}
export default Toggle;