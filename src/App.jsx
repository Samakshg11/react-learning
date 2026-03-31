// import { useState } from "react"
// import { useEffect } from "react";


// import { BrowserRouter, Route, useSearchParams } from "react-router-dom"





// const { useState } = require("react");

//  function App() {
//   const [Data,setData] = useState([]);
//   const res = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(res=>res.json()).
//   then((data)=>setData(data));
//   useEffect(()=>{
//     console.log(Data);
//   },[Data])
//   return (
//      <>
//       <h1>Posts</h1>

//       {Data.map((item) => (
//         <div key={item.id}>
//           <h3>{item.title}</h3>
//           <p>{item.body}</p>
//           <hr />
//         </div>
//       ))}
//     </>
//   )
// }

// export default App


// Q=>2

// import { useState, useEffect } from "react";

// function App() {
//   const [Data, setData] = useState([]);
//   const getData = async ()=>{
//     try{
//       const res=await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data= await res.json();
//       setData(data);
//     } catch (err) {
//       console.error("Error fetching data:", err.message);
//     }
//   };
//   useEffect(()=>{
//     getData();
//   },[])

  
//   return (
//     <>
//       <h1>Posts</h1>

//       {Data.map((item) => (
//         <div key={item.id}>
//           <h3>{item.title}</h3>
//           <p>{item.body}</p>
//           <hr />
//         </div>
//       ))}
//     </>
//   );
// }

// export default App;







// Q=>3

// import React, { use, useState } from "react";
// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { Provider, useDispatch, useSelector } from "react-redux";

// // slice
// const userSlice = createSlice({
//   name: "user",
//   initialState: null,
//   reducers: {
//     addUser: (state, action) => {
//       return action.payload;
//     },
//     removeUser: () => {
//       return null;
//     },
//   },
// });

// const { addUser, removeUser } = userSlice.actions;

// // store
// const store = configureStore({
//   reducer: {
//     user: userSlice.reducer,
//   },
// });

// // component
// function App() {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const [name,setname]=useState("");
//   const [age,setage]=useState("");
//   const handleAddUser=()=>{
//     dispatch(addUser({ name, age }));
//   }
//   const handleRemoveUser = ()=>{
//     dispatch(removeUser());
//   }

//   return (
//     <>
//       <h1>User Information</h1>
//       <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setname(e.target.value)} />
//       <input type="number" placeholder="Enter age" value={age} onChange={(e)=>setage(e.target.value)} />
//       <button onClick={handleAddUser}>Add User</button>
//       <button onClick={handleRemoveUser}>Remove User</button>
      
      

//     </>
//   );
// }

// // provider wrap
// export default function Main() {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// }

// Q=>4

// import axios from "axios";
// import { useEffect, useState } from "react";
// function App(){
//   const [data,setData]=useState([]);
//   const fetchData = async()=>{
//     try{
//       const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setData(res.data);
//       console.log(res.data);
//     }
//     catch(err){
//       console.log("Error fetching data:", err.message);
//     }
//   }
//   useEffect(()=>{
//     fetchData()
// },[])
//   return(
//     <>
//       <h1>Axios Example</h1>
//      {data.map((item) => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </>
//   )
// }
// export default App;

// import { useState } from "react";


//Q=>5


// const App = () => {
//   const [name,setname]=useState("");
//   const[email,setemail]=useState("");

// const handlesubmit= (e)=>{
//   e.preventDefault();
//   if(!name || !email){
//     alert("Please fill in all fields");
//     return;
//   }
//   setname("");
//   setemail("");
// }
//   return (
//     <>
//       <h1>Form Validation</h1>
//       <form onSubmit={handlesubmit}>
//         <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setname(e.target.value)} />
//         <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)} />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;


//Q=>6

// const App = () => {
//   const [name,setname]=useState("");
//   const[email,setemail]=useState("");

// const handlesubmit= (e)=>{
//   e.preventDefault();
//   setname("");
//   setemail("");
// }
//   return (
//     <>
//       <h1>Form Validation</h1>
//       <form onSubmit={handlesubmit}>
//         <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setname(e.target.value)} />
//         <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)} />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;



//Q=>7




// export default App;


//Q=>6


//  const App = () => {
//   const [name,setname]=useState("");
//   const[email,setemail]=useState("");

// const handlesubmit= (e)=>{
//   e.preventDefault();
//   setname("");
//   setemail("");
// }
//   return (
//     <>
//       <h1>Form Validation</h1>
//       <form onSubmit={handlesubmit}>
//         <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setname(e.target.value)} />
//         <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)} />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;



//Q=>7

// import { useState } from "react";

// function App(){
//   const [name,setname]=useState("");
//   return(
//     <>
//       <h1>UnControlled Component</h1>
//       <input type="text" placeholder="Enter your nmae" onChange={(e)=>setname(e.target.value)} />
//       <p>Your name is: {name}</p>
//     </>
//   )
// }
// export default App;


//Q=>8

// import { BrowserRouter, Routes, Route, Link, useSearchParams } from "react-router-dom";

// const Home = () => {
//   return (
//     <>
//       <h1>Home Page</h1>
//       <Link to="/user?name=Samaksh&age=20">Go to User</Link>
//     </>
//   );
// };

// const User = () => {
//   const [params] = useSearchParams();

//   const name = params.get("name");
//   const age = params.get("age");

//   return (
//     <>
//       <h1>User Page</h1>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/user" element={<User />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;



// import { BrowserRouter,Route,Routes,Link,useSearchParams } from "react-router-dom";
// const Home =()=>{
  
//   return(
//     <>
//     <h1>Home Page</h1>
//     <Link to="/users?name=Samaksh&age=20">Go to user page</Link>
//     </>
//   )
// }
// const User=()=>{
//   const [params]=useSearchParams();
//   const name=params.get("name");
//   const age= params.get("age");
//   return (
//     <>
//     <h1>User details</h1>
//     <p>User name: {name}</p>
//     <p>User age: {age}</p>
//     </>
//   );
// }
// const App=()=>{
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/users" element={<User/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }
// export default App;


// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");

//   return (
//     <>
//       <h1>Home Page</h1>

//       <input
//         type="text"
//         placeholder="Enter name"
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         type="number"
//         placeholder="Enter age"
//         onChange={(e) => setAge(e.target.value)}
//       />

//       <br /><br />

//       <Link to={`/users?name=${name}&age=${age}`}>
//         Go to User
//       </Link>
//     </>
//   );
// };

// export default Home;


// import { BrowserRouter, Routes, Route, Link, useSearchParams } from "react-router-dom";
// import { useState } from "react";

// const Home = () => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");

//   return (
//     <>
//       <h1>Home Page</h1>
    
//       <input type="text"
//         placeholder="Enter name"
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input type="number"
//         placeholder="Enter age"
//         onChange={(e) => setAge(e.target.value)}
//       />

//       <br /><br />

//       <Link to={`/user?name=${name}&age=${age}`}>
//        <button>Go to User</button>
//        </Link>
//     </>
//   );
// };

// const User = () => {
//   const [params] = useSearchParams();

//   const name = params.get("name");
//   const age = params.get("age");


//   return (
//     <>
//       <h1>User Page</h1>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/user" element={<User />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;



//Q=>9


// import About from "../components/About";
// import Home from "../components/Home";
// import Contact from "../components/Contact";
// import{BrowserRouter,Routes,Route,Link} from "react-router-dom";
// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//   {/* <nav className="flex justify-around">
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//     // </nav> */}
//     <p className="flex justify-center mt-4">
//       <Link to="/" className="text-bold">Home</Link>
//       <Link to="/about" className="text-bold mx-4">About</Link>
//       <Link to="/contact" className=" text-bold">Contact</Link>
//     </p>


//     <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/about" element={<About/>}/>
//     <Route path="/contact" element={<Contact/>}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App;


//Q=>10

// import { useState } from "react";

// const App=()=>{
//   const [name,setname]=useState("");
//   const [email,setemail]=useState("");
//   const handleSubmit= async (e)=>{
//     e.preventDefault();
//     const data ={name,email};
//     try{
//       const res= await fetch("https://jsonplaceholder.typicode.com/posts",{
//         method:"POST",
//         body:JSON.stringify(data)
//       });
//       const result= await res.json();
//       console.log("Form submitted successfully:", result);
     
//     }
//     catch(err){
//       console.error("Error submitting form:", err.message);
//     }
//   };
//   return(
//     <>
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Enter name" value={name}onChange={(e)=>setname(e.target.value)} />
//       <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)} />
//       <button type="submit">Submit</button>
//     </form>
//     </>
//   )
// }
// export default App;




//Q=>11
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let err = {};

//     // Username validation
//     if (form.username.length < 3 || form.username.length > 15) {
//       err.username = "Username must be 3-15 characters";
//     } else {
//       for (let ch of form.username) {
//         if (
//           !(ch >= "a" && ch <= "z") &&
//           !(ch >= "A" && ch <= "Z") &&
//           !(ch >= "0" && ch <= "9")
//         ) {
//           err.username = "No special characters allowed";
//           break;
//         }
//       }
//     }

//     // Email validation (simple)
//     if (
//       !form.email.includes("@") ||
//       !form.email.includes(".") ||
//       form.email.startsWith("@") ||
//       form.email.endsWith("@")
//     ) {
//       err.email = "Invalid email format";
//     }

//     // Password validation
//     if (form.password.length < 6) {
//       err.password = "Password must be at least 6 characters";
//     }

//     // Confirm password
//     if (form.password !== form.confirmPassword) {
//       err.confirmPassword = "Passwords do not match";
//     }

//     return err;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length === 0) {
//       alert("Form submitted successfully!");
//       console.log(form);
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="form">
//         <h2>Signup Form</h2>

//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={form.username}
//           onChange={handleChange}
//         />
//         {errors.username && <p className="error">{errors.username}</p>}

//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//         />
//         {errors.email && <p className="error">{errors.email}</p>}

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//         />
//         {errors.password && <p className="error">{errors.password}</p>}

//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={form.confirmPassword}
//           onChange={handleChange}
//         />
//         {errors.confirmPassword && (
//           <p className="error">{errors.confirmPassword}</p>
//         )}

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }


// export default App;


// import { useRef } from "react";
// import "./App.css";

// function App() {
//   const passwordRef = useRef();
//   const confirmRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (passwordRef.current.value !== confirmRef.current.value) {
//       alert("Passwords do not match!");
//       return;
//     }

//     alert("Form submitted successfully!");
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="form">
//         <h2>Signup Form</h2>

//         {/* Username */}
//         <input
//           type="text"
//           placeholder="Username"
//           required
//           minLength="3"
//           maxLength="15"
//           pattern="[A-Za-z0-9]+"
//           title="Only letters and numbers allowed"
//         />

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email"
//           required
//         />

//         {/* Password */}
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           minLength="6"
//           ref={passwordRef}
//         />

//         {/* Confirm Password */}
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           required
//           minLength="6"
//           ref={confirmRef}
//         />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default App;




// import { useRef } from "react";
// import "./App.css";

// const App=()=>{
//   const passwordRef=useRef();
//   const confirmRef=useRef();
  
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//   if(passwordRef.current.value !== confirmRef.current.value){
//     alert("passwords do not match");
//     return;
//   }
//   alert("Form submitted successfully!");
//   }
//   return(
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <h1>Signup Form</h1>
//         <input type="text" placeholder="Enter username" 
//         required minLength="3" maxLength="15" pattern="[A-Za-z0-9]+" title="Only letters and numbers allowed" />
//         <input type="email" placeholder="Enter email" required />
//         <input type="password" placeholder="Enter password" required minLength="6" ref={passwordRef} />
//         <input type="password" placeholder="Confirm password" required minLength="6" ref={confirmRef} />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   )

// }
// export default App;


//Q=>12
// import Button from "../components/Button";

// function App() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <Button label="Click Me" bgColor="blue" />
//       <br /><br />
//       <Button label="Delete" bgColor="red" />
//     </div>
//   );
// }

// export default App;




//normal counter app

// import { useState } from "react";

// function App(){
//     const [count,setCount]=useState(0);

//     const handlecount=(e)=>{
//         if(e.target.name==="increment"){
//             setCount(count+1);
//         }
//         else if(e.target.name==="decrement"){
//             setCount(count-1);
//         }
//     }
//     return(
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h1>Counter: {count}</h1>
//             <button name="increment" onClick={handlecount}>Increment</button>
//             <button name="decrement" onClick={handlecount} style={{ marginLeft: "10px" }}>Decrement</button>
//         </div>
//     )
// }
// export default App;



// import { useState } from "react";

// function App() {
//   const [show, setShow] = useState(true);

//   const handleToggle = () => {
//     setShow(!show);
//   };

//   return (
//    <>
//       <button onClick={handleToggle}>
//         {show ? "Hide" : "Show"}
//       </button>

//       {show && <h1>Hello React</h1>}
//     </>
//   );
// }

// export default App;




//calculator app 


// import { useState } from "react";
// function App(){
//     const [num1,setnum1]=useState("");
//     const [num2,setnum2]=useState("");
//     const [result,setResult]=useState(0);
//     return(
//         <>
//         <h1>Calculator</h1>
//         <input type="number" placeholder="Enter first number" value={num1} onChange={(e)=>setnum1(Number(e.target.value))}/>
//         <input type="number" placeholder="Enter second number" value={num2} onChange={(e)=>setnum2(Number(e.target.value))}/>
//         <br></br>
//         <button onClick={()=>setResult(num1+num2)}>Add</button>
//         <button onClick={()=>setResult(num1-num2)}>sub</button>
//         <button onClick={()=>setResult(num1*num2)}>multi</button>
//         <button onClick={()=>setResult(num1/num2)}>Div</button>
//         <h2>Result:{result}</h2>
//         </>
//     )
// }
// export default App;



//form and dashboard

// import {useState} from "react";
// const App=()=>{
//     const [name,setname]=useState("");
//     const [email,setemail]=useState("");
//     return(
//         <>
//         <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setname(e.target.value)}/>
//         <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>setemail(e.target.value)}/>
//         <h2>{name}</h2>
//         <h2>{email}</h2>
//         </>
//     )
// }
// export default App;


// import {useEffect, useState} from "react";

// const App=()=>{
//     const [data,setdata]=useState([]);
//     const fetchData= async ()=>{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const result = await res.json();
//         setdata(result);
//     };
//     useEffect(()=>{
//         fetchData();
//     },[]);
//     return(
//         <>
//         {data.map((user)=>(
//             <p key={user.id}>{user.name}</p>
//         ))}
//         </>
//     )
// }
// export default App;




// import { useEffect, useState } from "react";

// const App = () => {
//   const [data, setdata] = useState([]);

//   const fetchData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const result = await res.json();
//     setdata(result);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>User Dashboard</h1>

//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//         gap: "20px"
//       }}>
//         {data.map((user) => (
//           <div
//             key={user.id}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               padding: "15px",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
//             }}
//           >
//             <h3>{user.name}</h3>
//             <p><b>Email:</b> {user.email}</p>
//             <p><b>City:</b> {user.address.city}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;






//form validations


// import { useState } from "react";

// const App =()=>{
//     const [name,setname]=useState("");
//     const [error,seterror]=useState("");
//     const handleSubmit=()=>{
//         if(name===""){
//             seterror("name is mandatory");
//         }
//         else{
//         alert("Added successfully");
//         }
//     }
//     return(
//         <>
//         <input type="text" onChange={(e)=>setname(e.target.value)}/>
//         <button type="submit" onClick={handleSubmit}>Submit</button>
//         <p>{error}</p>
//         </>
//     )
// }
// export default App;




// import React from "react";
// import ReactDOM from "react-dom/client";

// const element = React.createElement(
//   "ul",
//   null,
//   React.createElement("li", null, "Michael Jackson"),
//   React.createElement("li", null, "The Weeknd"),
//   React.createElement("li", null, "Shakira"),
//   React.createElement("li", null, "Britney Spears")
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);


// import React, { useRef } from "react";

// function App() {
//   const nameRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(nameRef.current.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input ref={nameRef} type="text" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;


import { use, useRef } from "react";


function App(){
    const nameRef=useRef();
    const emailRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`Name: ${nameRef.current.value}`);
        console.log(`Email: ${emailRef.current.value}`);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" placeholder="Enter your name" />
            <input ref={emailRef} type="email" placeholder="Enter your email" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default App;




// import React from "react";

// function App() {

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const name = e.target.elements.name.value;
//     const email = e.target.elements.email.value;

//     console.log("Name:", name);
//     console.log("Email:", email);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" placeholder="Enter Name" />
//       <br /><br />
//       <input type="email" name="email" placeholder="Enter Email" />
//       <br /><br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;




