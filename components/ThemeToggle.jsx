import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [toggle, setToggle] = useState(()=>{
        return localStorage.getItem("toggle") === "true";
    });
    useEffect(()=>{
        localStorage.setItem("toggle", toggle);
    },[toggle])
    function toggleHandler(){
        setToggle(prev=>prev? false: true);
    }
    return(
        <div style={{textAlign: 'center', backgroundColor: toggle ? 'black' : 'white', color: toggle ? 'white' : 'black', padding: '40px'}}>
            <h1>Toggle: {toggle ? "ON" : "OFF"}</h1>
            <button onClick={toggleHandler}>Toggle</button>
        </div>
    )
}