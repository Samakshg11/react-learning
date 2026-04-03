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


// import { use, useRef } from "react";


// function App(){
//     const nameRef=useRef();
//     const emailRef=useRef();
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log(`Name: ${nameRef.current.value}`);
//         console.log(`Email: ${emailRef.current.value}`);
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <input ref={nameRef} type="text" placeholder="Enter your name" />
//             <input ref={emailRef} type="email" placeholder="Enter your email" />
//             <button type="submit">Submit</button>
//         </form>
//     )
// }
// export default App;




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




// Q1: TodoList with hooks + lifecycle logs

// import { useState, useEffect } from "react";

// function TodoList() {
//   const [items, setItems] = useState([]);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     console.log("Mounted");
//     return () => {
//       console.log("Unmounted");
//     };
//   }, []);

//   const addItem = () => {
//     if (input.trim() !== "") {
//       setItems([...items, input]);
//       setInput("");
//     }
//   };

//   const removeItem = (index) => {
//     const newItems = items.filter((_, i) => i !== index);
//     setItems(newItems);
//   };

//   return (
//     <>
//       <input value={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={addItem}>Add</button>

//       {items.map((item, index) => (
//         <div key={index}>
//           {item}
//           <button onClick={() => removeItem(index)}>Remove</button>
//         </div>
//       ))}
//     </>
//   );
// }

// export default TodoList;


// Q2: UserCard

// function UserCard({ name, age, location }) {
//   return (
//     <div style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
//       <h3>{name}</h3>
//       <p>Age: {age}</p>
//       <p>Location: {location}</p>
//     </div>
//   );
// }

// export default UserCard;




// import {useState} from "react";
// import {configureStore, createSlice} from "@reduxjs/toolkit";
// import {Provider, useDispatch, useSelector} from "react-redux";

// const todoSlice = createSlice({
//     name:"todo",
//     initialState:[],
//     reducers:{
//         addTodo:(state,action)=>{
//             state.push(action.payload);
//         },
//         removeTodo:(state,action)=>{
//             return state.filter((_,index)=>index!==action.payload);
//         }
//     }
// });
// const {addTodo,removeTodo}= todoSlice.actions;


// const store = configureStore({
//     reducer:{
//         todos:todoSlice.reducer
//     }
// });
// function App(){
//     const [input,setInput]=useState("");
//     const todos = useSelector((state)=>state.todos);
//       const dispatch= useDispatch();
//     const handleAdd=()=>{
//         if (input.trim()!==""){
//             dispatch(addTodo(input));
//             setInput("");
//         }
//     }
//     const handleremove=(index)=>{
//         dispatch(removeTodo(index));
//     }
//     return(
//         <div style={{textAlign:"center", marginTop:"50px"}}>
//             <h1>Todo List</h1>
//             <input value={input} onChange={(e)=>setInput(e.target.value)} />
//             <button onClick={handleAdd}>Add Todo</button>
            
//             <ul style={{listStyle:"none", padding:0}}>
//                 {todos.map((todo,index)=>(
//                     <li key={index} style={{margin:"10px 0"}}>
//                         {todo}
//                         <button onClick={()=>handleremove(index)} style={{marginLeft:"10px"}}>Remove</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )

// }
// export default function Main(){
//     return(
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     )
// }


// import { useState } from "react";

// function App() {
//     const [input, setInput] = useState("");
//     const [todos, setTodos] = useState([]);

//     const handleAdd = () => {
//         if (input.trim() !== "") {
//             setTodos([...todos, input]);
//             setInput("");
//         }
//     };

//     const handleRemove = (index) => {
//         setTodos(todos.filter((_, i) => i !== index));
//     };

//     return (
//         <div>
//             <h1>Todo List</h1>
//             <input 
//                 value={input} 
//                 onChange={(e) => setInput(e.target.value)} 
//             />
//             <button onClick={handleAdd}>Add Todo</button>

//             <ul>
//                 {todos.map((todo, index) => (
//                     <li key={index}>
//                         {todo}
//                         <button onClick={() => handleRemove(index)}>
//                             Remove
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;





// import PropTypes from "prop-types";

// // HotelInfo Component
// const HotelInfo = ({ name, address, rooms }) => {
//   const handleBook = () => {
//     alert("Booked: ");
//   };

//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{address}</p>

//       <table border="1">
//         <thead>
//           <tr>
//             <th>Room Type</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {rooms.map((room, index) => (
//             <tr key={index}>
//               <td>{room.type}</td>
//               <td>{room.price}</td>
//               <td>
//                 <button onClick={() => handleBook()}>
//                   Book Now
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // PropTypes validation
// HotelInfo.propTypes = {
//   name: PropTypes.string,
//   address: PropTypes.string,
//   rooms: PropTypes.array
// };

// // App Component
// function App() {
//   const hotelData = {
//     name: "Grand Hotel",
//     address: "Delhi",
//     rooms: [
//       { type: "Single", price: 1000 },
//       { type: "Double", price: 2000 },
//       { type: "Suite", price: 5000 },
//       { type: "Deluxe", price: 3000 }
//     ]
//   };

//   return (
//     <div>
//       <HotelInfo
//         name={hotelData.name}
//         address={hotelData.address}
//         rooms={hotelData.rooms}
//       />
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessage("Welcome " + name);
//   };

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div style={{
//       backgroundColor: darkMode ? "black" : "white",
//       color: darkMode ? "white" : "black",
//       height: "100vh",
//       padding: "20px"
//     }}>
      
//       <h2>Form</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br /><br />

//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br /><br />

//         <button type="submit">Submit</button>
//       </form>

//       <h3>{message}</h3>

//       <button onClick={toggleTheme}>
//         Toggle Theme
//       </button>
//     </div>
//   );
// }

// export default App;



// import { createContext, useContext, useState } from "react";

// // 1. Context create kiya
// const AuthContext = createContext();

// function App() {
//   // 2. Login state
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // 3. Login function
//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   // 4. Logout function
//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     // 5. Provider se data share kiya
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       <Home />
//     </AuthContext.Provider>
//   );
// }

// // 6. Dusra component jo data use karega
// function Home() {
//   const { isAuthenticated, login, logout } = useContext(AuthContext);

//   return (
//     <div>
//       <h2>{isAuthenticated ? "Logged In" : "Logged Out"}</h2>

//       <button onClick={login}>Login</button>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// }

// export default App;


// import{useState,useContext,createContext} from "react";

// const AuthContext = createContext();
// const App = ()=>{
//     const [isAuthenticated,setisAuthenticated]= useState(false);
//     const login=()=>{
//         setisAuthenticated(true);
//     }
//     const logout=()=>{
//         setisAuthenticated(false);
//     }
//     return(
//         <AuthContext.Provider value={{isAuthenticated,login,logout}}>
//         <Home/>
//         </AuthContext.Provider>
//     );
// }
// export default App;

// function Home(){
//     const {isAuthenticated,login,logout}=useContext(AuthContext);
//     return(
//         <div>
//             <h2>{isAuthenticated?"Logged in":"Logged out"}</h2>
//             <button onClick={login}>Login</button>
//             <button onClick={logout}>Logout</button>
//         </div>
//     )
// }




// import PropTypes from "prop-types";

// function App(){
//     const Hotel={
//         name:"Sam Hotel",
//         address:"Kichha",
//         rooms:[
//             {type:"Single",price:10000},
//             {type:"Double",price:15000},
//             {type:"Honeymoon",price:20000},
//         ]
//     };
//     return (
//         <HotelInfo data={Hotel}/>
//     )
// }
// function HotelInfo({data}){
//     return(
//         <div>
//             <h2>{data.name}</h2>
//             <p>{data.address}</p>

//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Room Type</th>
//                         <th>Price</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.rooms.map((room,index)=>(
//                         <tr key={index}>
//                             <td>{room.type}</td>
//                             <td>{room.price}</td>
//                             <td>
//                                 <button onClick={()=>alert(`Room Booked :${room.type}`)}>Book Now</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// HotelInfo.propTypes={
//     data:PropTypes.object
// };
// export default App;



// import{useState} from "react";

// const App=()=>{
//     const [count,setcount]=useState(0);

//     return(
//         <>
//         <h1>Counter</h1>
//         <button onClick={()=>setcount(prev=>prev-1)}>-</button>
//         <button onClick={()=>setcount(prev=>prev+1)}>+</button>
//         <p>{count}</p>
//         </>
//     )
// }
// export default App;


// import React, { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         Toggle Component
//       </button>

//       {show && <Counter />}
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);

//   // 1. Mount
//   useEffect(() => {
//     console.log("Component Mounted");

//     return () => {
//       console.log("Component Unmounted");
//     };
//   }, []);

//   // 2. Update
//   useEffect(() => {
//     console.log("Component Updated");
//   }, [count]);

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// }

// export default App;



// import{useState,useEffect,useRef} from "react";

// function App(){
//     const [show,setshow]=useState(false);
//     return(
//         <>
//         <button onClick={()=>setshow(!show)}>Toggle Component</button>
//         {show && <Counter/>}
//         </>
//     );
// }
// export default App;
// function Counter(){
//     const [count,setcount]=useState(0);
//      const isFirst = useRef(true);
//     useEffect(()=>{
//         console.log("Mounted");
//         return ()=>{
//             console.log("Unmounted");
//         };
//     },[]);

//     useEffect(()=>{
//         if(isFirst.current){
//             isFirst.current=false;
//             return;
//         }
//         console.log("Updated");
//     },[count]);

//     return(
//         <>
//         <h1>Count: {count}</h1>
//         <button onClick={()=>setcount(prev=>prev+1)}>Increment</button>
//         </>
//     )
// }



// import {useEffect, useState} from "react";

// function App(){
//     const [data,setdata]=useState([]);
//     useEffect(()=>{
//         console.log("Component Mounted");
//         const fetchData=async()=>{
//             try{
//             const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
//             const result = await res.json();
//             setdata(result);
//         }
//         catch(err){
//             console.error(err);
//         }
//         };
//         fetchData();
//         return()=>{
//             console.log("Component Unmounted");
//         }
//     },[])
//     return(
//         <>
//         <h1>Posts</h1>
//         {data.map((item)=>(
//             <p key={item.id}>{item.title}</p>
//         ))}  
//         </>
//     )
// }
// export default App;


// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     title: "",
//     body: ""
//   });

//   const [responseData, setResponseData] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await res.json();

//       console.log(data);
//       setResponseData(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <h2>POST Form</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Enter title"
//           value={formData.title}
//           onChange={handleChange}
//         />

//         <br /><br />

//         <input
//           type="text"
//           name="body"
//           placeholder="Enter body"
//           value={formData.body}
//           onChange={handleChange}
//         />

//         <br /><br />

//         <button type="submit">Submit</button>
//       </form>

//       {responseData && (
//         <div>
//           <h3>Submitted Data:</h3>
//           <p><b>Title:</b> {responseData.title}</p>
//           <p><b>Body:</b> {responseData.body}</p>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;



// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dark, setDark] = useState(false);
//   const [msg, setMsg] = useState("");

//   const handleSubmit = () => {
//     setMsg(`Welcome ${name}`);
//   };

//   return (
//     <div style={{
//       background: dark ? "black" : "white",
//       color: dark ? "white" : "black",
//       height: "100vh"
//     }}>
//       <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
//       <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />

//       <button onClick={handleSubmit}>Submit</button>
//       <button onClick={()=>setDark(!dark)}>Toggle Theme</button>

//       <h3>{msg}</h3>
//     </div>
//   );
// }


// export default App;



// import { useState } from "react";

// function App() {
//   const [a, setA] = useState(0);
//   const [b, setB] = useState(0);
//   const [res, setRes] = useState(0);

//   return (
//     <>
//       <input onChange={(e)=>setA(Number(e.target.value))} />
//       <input onChange={(e)=>setB(Number(e.target.value))} />

//       <button onClick={()=>setRes(a+b)}>+</button>
//       <button onClick={()=>setRes(a-b)}>-</button>
//       <button onClick={()=>setRes(a*b)}>*</button>
//       <button onClick={()=>setRes(a/b)}>/</button>

//       <h2>{res}</h2>
//     </>
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

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;