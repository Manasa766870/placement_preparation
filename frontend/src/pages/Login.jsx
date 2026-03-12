import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [showPassword,setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try{
      const res = await API.post("/login",{email,password})
      const role = res.data.role

      if(role === "admin"){
        navigate("/admin/dashboard")
      }else{
        navigate("/student/dashboard")
      }

    }catch(err){
      alert("Invalid credentials")
    }
  }

  return(

  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

  <div className="card p-4 shadow" style={{width:"400px"}}>

  <h3 className="text-center mb-4">Placement Prep Login</h3>

  <form onSubmit={handleSubmit}>

  <div className="mb-3">
  <label>Email</label>
  <input
  type="email"
  className="form-control"
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  />
  </div>

  <div className="mb-3">
  <label>Password</label>

  <div className="input-group">

  <input
  type={showPassword ? "text" : "password"}
  className="form-control"
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
  />

  <span
  className="input-group-text"
  style={{cursor:"pointer"}}
  onClick={()=>setShowPassword(!showPassword)}
  >

  <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>

  </span>

  </div>
  </div>

  <button className="btn btn-primary w-100">
  Login
  </button>

  <p className="text-center mt-3">
  Don't have account? <Link to="/register">Register</Link>
  </p>

  </form>

  </div>
  </div>

  )
}

export default Login