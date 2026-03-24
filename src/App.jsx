// import { useState } from "react"
// import { useEffect } from "react";



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

import { useState } from "react";


//Q=>5


const App = () => {
  const [name,setname]=useState("");
  const[email,setemail]=useState("");

const handlesubmit= (e)=>{
  e.preventDefault();
  if(!name || !email){
    alert("Please fill in all fields");
    return;
  }
  setname("");
  setemail("");
}
  return (
    <>
      <h1>Form Validation</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setname(e.target.value)} />
        <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;