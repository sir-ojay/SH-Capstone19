import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../../Components/sideBar/sideBar'
import Team from '../Team/Team'
import './Login.css'
import { useState } from 'react'
import Home from '../Home/Home'

const Login = () => {
  const[form, setForm] = useState({
    email: "" ,
    password: ""
  });

  const [data, setData] = useState({});

  const handleChange = (e)=>{
    setForm({
      ...form ,
      [e.target.name]: e.target.value
    })
  }
 
  const submitForm = (e)=>{
  e.preventDefault();
 setData({
   ...form
 })
 sessionStorage.setItem('userDetails' , JSON.stringify({...form}));
 console.log(data)
 window.location = "/dashboard" ;

  }
   
  return (
        <div className='bdy'>
         <div className="formBox">
             
        <h1>Login Form</h1>
        <p>Welcome Back </p>

        <form className="loginForm"  onSubmit={submitForm}>
            <div id="errorMessage"></div>
           <div><input type="email" name="email" id="emailBox" className="formField" placeholder="Email Address" onChange={handleChange}/></div> 
           <hr/>
           
           <div> <input type="password" name="password" id="passwordBox" className="formField" placeholder="Password" onChange={handleChange}/></div>
           <hr/>
          <div className="submit"><input type="submit" name="submit" id="submitButton" /></div>  
        </form>
    </div>
    </div>
    
  )
}

export default Login