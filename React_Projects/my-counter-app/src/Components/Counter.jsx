import React, { useState } from "react";


function CounterApp({number}){
    const [count,setCount]=useState(number)

    return(
        <>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
            <button disabled={count==0} onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
            
        </>
    )
}
export default CounterApp;