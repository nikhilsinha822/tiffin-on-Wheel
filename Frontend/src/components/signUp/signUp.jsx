import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from "react-router-dom"
import './signUp.css'

const SignUp = ({setEmail}) => {
    const baseURL = "https://snuhackathon.onrender.com";
    const navigate = useNavigate()
    const [user,setUser] = useState({
        username:"",
        email:"",
        password:"",
        cnfPswd:""
    })
    const handleChange = (e) =>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const {password,cnfPswd} = user
        if(password!==cnfPswd){
        alert('password and confirm password should be same')
        }
        else{
        axios.post(`${baseURL}/signup`,user)
        .then((res)=>{
            alert(res.data.msg) 
        if(res.data.msg==='otp has been sent'){
            //console.log(res.data)
            setEmail(user.email)     
            navigate('/otpVerify')
        }
            else{
            
            return
        }
        })
    }
    }
    return <>
    {/* <form> */}
    <div className='basicForm1'>
        <span>
        <h1>Sign Up</h1>
        <input
            placeholder="Full Name"
            name="username"
            value={user.username}
            onChange={handleChange}
            type={"Text"}
            required
        />
        <input
            type="email"
            placeholder="Email"
            name='email'
            value={user.email}
            onChange={handleChange}
            required
        />
        <input
            placeholder="Password"
            name='password'
            value={user.password}
            onChange={handleChange}
            type={"password"}
            required
        />
        <input
            placeholder="confirm password"
            name='cnfPswd'
            value={user.cnfPswd}
            onChange={handleChange}
            type={"password"}
            required
        />
        <button onClick={handleSubmit}>Submit</button>
        <span>Already have an account? <Link to="/signIn">Sign In</Link></span>
        </span>
    </div>
        
    {/* </form> */}
    </>
}

export default SignUp