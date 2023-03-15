import React from 'react'
import { useState } from 'react';
export default function LoginForm({onClick}) {
    const [input, setInput] = useState({
        "email": "",
        "password": "",
    })
   
<<<<<<< HEAD
      const handlesubmit = (e)=>{
=======
    
    const handlesubmit = (e)=>{
>>>>>>> 9485b8d7250675fee4cf9ed8843d17aa61618b72
      if(input.email == ""){
        return alert("Please Enter E-mail");
      }
      else if(input.password == ""){
        return alert("Please Enter Password");
      }
      if(input.password.length < 8){
        return alert('Password must be 8 digit')
      }
        sessionStorage.setItem("user", JSON.stringify(input));

    }
  return (
    <div className='form-div'>
    <div className='myForm' >
    
<<<<<<< HEAD
    <img src=
=======
    

  <img src=
>>>>>>> 9485b8d7250675fee4cf9ed8843d17aa61618b72
            'https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png'
            style={{height:30,marginLeft:82}}/> 

    <form onSubmit={handlesubmit}>
    
        <div>
        <label htmlFor='mail' className='input-label'>Enter E-mail:</label><br></br>
        <input  placeholder='Enter your e-mail ' type='email' className='input' id='mail' 
<<<<<<< HEAD
        pattern=".+@(gmail|yahoo|hotmail|outlook)\.com" 
=======
>>>>>>> 9485b8d7250675fee4cf9ed8843d17aa61618b72
        name='email' 
        
        value={input.email} 
        onChange={(e) => {
                    setInput({ ...input, [e.target.name]: e.target.value });
                    }}></input>
        </div>
        <div>
        <label htmlFor='password' className='input-label'>Enter Password:</label><br></br>
        <input type='password' placeholder='Enter your password' className='input' id='password' 
        name='password' 
        
        value={input.password} 
        onChange={(e) => {
                        setInput({ ...input, [e.target.name]: e.target.value });
                        
                    }}></input>
                 
        </div>
        <div>
        <button type='submit' className='sbtn'>Login</button>
            <button type='submit' className='sbtn' onClick={onClick}>Close</button>
            
<<<<<<< HEAD
            <button type='button' className='cut' onClick={onClick}>✖</button>
=======
            <button type='button' className='cut' onClick={onClick}>✖️</button>
>>>>>>> 9485b8d7250675fee4cf9ed8843d17aa61618b72
        </div>
      </form>
    </div>
    </div>
  )
}
