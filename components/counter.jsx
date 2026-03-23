import React from 'react';
import {useState,useEffect} from 'react';
export default function Counter(){
    // const [count,setCount]= useState(0);

    // function buggy(){
    //     setCount(count+1);
    //     setCount(count+1);
    // }
    // function fixed(){
    //     setCount(prevCount => prevCount + 1);
    //     setCount(prevCount => prevCount + 1);
    // }
    // return(
    //     <div style={{textAlign: 'center'}}>
    //         <h1>Count: {count}</h1>
    //         <button onClick={buggy}>Buggy Increment</button>
    //         <button onClick={fixed}>Fixed Increment</button>
    //     </div>
    // )

    const [toggle, setToggle] = useState(false);

    function handleToggle(){
        setToggle(prevToggle => !prevToggle);
    }
    return(
        <div style={{textAlign: 'center',backgroundColor: toggle ? 'lightgreen' : 'lightcoral', padding: '20px'}}>  
            <h1>Toggle is {toggle ? "ON" : "OFF"}</h1>
            <button onClick={handleToggle}>Toggle</button>
        </div>

    )
}