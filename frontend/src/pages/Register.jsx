import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register(){

 const [name,setName] = useState("")
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 const [role,setRole] = useState("student")

 const navigate = useNavigate()

 const handleSubmit = async(e)=>{
   e.preventDefault()

   await API.post("/register",{
     name,email,password,role
   })

   alert("Registration successful")
   navigate("/")
 }

 return(

 <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

 <div className="card p-4 shadow" style={{width:"400px"}}>

 <h3 className="text-center mb-3">Register</h3>

 <form onSubmit={handleSubmit}>

 <input className="form-control mb-2"
 placeholder="Name"
 value={name}
 onChange={(e)=>setName(e.target.value)}
 />

 <input className="form-control mb-2"
 placeholder="Email"
 value={email}
 onChange={(e)=>setEmail(e.target.value)}
 />

 <input type="password"
 className="form-control mb-2"
 placeholder="Password"
 value={password}
 onChange={(e)=>setPassword(e.target.value)}
 />

 <select
 className="form-control mb-3"
 value={role}
 onChange={(e)=>setRole(e.target.value)}
 >
 <option value="student">Student</option>
 <option value="admin">Admin</option>
 </select>

 <button className="btn btn-success w-100">
 Register
 </button>

 </form>

 </div>
 </div>

 )
}

export default Register