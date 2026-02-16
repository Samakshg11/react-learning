import React from 'react';
import {useState} from 'react';
export default function Counter(){
    const [count,setCount]= useState(0);

    function buggy(){
        setCount(count+1);
        setCount(count+1);
    }
    function fixed(){
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }
    return(
        <div style={{textAlign: 'center'}}>
            <h1>Count: {count}</h1>
            <button onClick={buggy}>Buggy Increment</button>
            <button onClick={fixed}>Fixed Increment</button>
        </div>
    )

}