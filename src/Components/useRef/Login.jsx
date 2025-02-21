import React, {  useState,useEffect, useRef } from 'react'
import Useref from './Useref'
import "./Login.css"
const Login = () => {
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const [showHome, setShowHome] = useState(false)
  const [show, setShow] = useState(false)
  const localSignUp = localStorage.getItem("signUp")
  const localEmail = localStorage.getItem("email")
  const localPassword = localStorage.getItem("password")
  useEffect(()=>{
    if(localSignUp){
      setShowHome(true)
    }
    if(localEmail){
      setShow(true)
    }
  })

  const handleClick = ()=>{
    // console.log(name.current.value,email.current.value,password.current.value);
    if(name.current.value && email.current.value && password.current.value){
      localStorage.setItem('name',name.current.value)
      localStorage.setItem('email',email.current.value)
      localStorage.setItem('password',password.current.value)
      localStorage.setItem('signUp',email.current.value)
      alert("Account created successfully")
      window.location.reload();
    }
  }
  const handleSignIn = ()=>{
    if(email.current.value===localEmail && password.current.value===localPassword){
      localStorage.setItem('signUp',email.current.value)
      window.location.reload();
    }
    else{
      alert("Please Enter valid Credential");
    }
  }
  return (
    <div>
      {showHome?<Useref/>:
      (show?
        <div className='container'>
          <h1>Please Sign in</h1>
          <div className='input_field'>
            <input type='email' placeholder='Email' ref={email} required/>
          </div>
          <div className='input_field'>
            <input type='password' placeholder='Password' ref={password} required/>
          </div>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
        :
        <div className='container'>
        <div className='input_field'>
          <input type="text" placeholder='Name' ref={name} required/>
        </div>
        <div className='input_field'>
          <input type='email' placeholder='Email' ref={email} required/>
        </div>
        <div className='input_field'>
          <input type='password' placeholder='Password' ref={password} required/>
        </div>
        <button onClick={handleClick}>Sign Up</button>
      </div>)
      }
    </div>
  )
}

export default Login
