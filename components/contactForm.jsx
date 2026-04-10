// import React from 'react'

// export default function ContactForm() {
//     const [name, setName] = useState('')
//   return (
//     <div>
//         <h1>Contact me</h1>
//         <input type="text"
//         placeholder='Enter name'
//         onChange={(e) => {
//             setName(e.target.value);
//             console.log("Name: ", e.target.value);
//         }} />

//         <button
//             onClick={()=>{
//                 alert(`Submitted name is: ${name}`);
//             }}>
//                 Submit
//         </button>
      
//     </div>
//   )
// }

// 

// import { useState } from "react";

// export default function Contact() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');

//     const [submittedName, setSubmittedName] = useState('');

//     function handleSubmit(e) {
//         e.preventDefault();

//         const name = e.target.name.elements[0].value;
//         const email = e.target.email.elements[1].value;
//         setSubmittedName(name);
//         alert(`Uncontrolled Name: ${name}, ${email}`);
//     }
//     return(
//         <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
//             <input type="text" placeholder="Enter name" 
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             />
//             <input type="email" placeholder="Enter email" />
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [submittedName, setSubmittedName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const name = e.target.elements[0].value;
        const email = e.target.elements[1].value;
        setSubmittedName(name);
        alert(`Uncontrolled Name: ${name}, ${email}`);
    }
    return(
        <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
            <input type="text" placeholder="Enter name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={()=>console.log("Key Down")}
            onKeyUp={()=>console.log("Key Up")}
            />
            <br></br>
            <input type="email" placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={()=> console.log("Key pressed")}
            />
            <br></br>
            <button type="submit" onMouseUp={()=>console.log("Mouse Up")}>Submit</button>
            <p>Live Name (Controlled):{name}</p>
            <p>Submitted Name (UnControlled):{submittedName}</p>
        </form>
    )
}



import React from 'react';
import {useState} from 'react';

export default function ContactForm() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [text,setText] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}, Text: ${text}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder ='Enter name' value={name} onChange ={(e) =>setName(e.target.value)}
            onKeyDown={() => console.log("Key Down")}
            onKeyUp={() => console.log("Key Up")}
            onMouseDown={() => console.log("Mouse Down")}
            />
            <br></br>

            <input type='email' placeholder ='Enter email' value={email} onChange ={(e) =>setEmail(e.target.value)}
            onKeyDown={() => console.log("Key Down")}
            onKeyUp={() => console.log("Key Up")}
            onMouseDown={() => console.log("Mouse Down")}
            />
            <br></br>
            <textarea placeholder='Enter text' value={text} onChange={(e) => setText(e.target.value)}
            onKeyDown={() => console.log("Key Down")}
            onKeyUp={() => console.log("Key Up")}
            onMouseDown={() => console.log("Mouse Down")}
            />
            <br></br>
            <button type='submit' onMouseUp={() => console.log("Mouse Up")}>Submit</button>

        </form>
    )
}