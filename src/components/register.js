import React, { useState, useEffect  } from 'react';
import { useHistory } from 'react-router-dom';


const Register = (props)=>{
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
    // input handle functions
    const handleChange = (event)=>{
        
        if(event.target.name === "email"){
            setEmail(event.target.value)
        }else{
            setPassword(event.target.value)
        }
    }

    // Login button onclick event
    const userRegister = async()=>{
        const response = await fetch(`/auth/register`,{
            method : 'POST',
            cache: 'no-cache',
            credentials:'include', 
            headers : {'Content-Type': 'application/json'},
            body:JSON.stringify({email,password})
        })
        
        const result = await response.text()
        if(result=="true"){
            //set mode== login
            history.push("/")
        }else{
            alert("Something went wrong")
        }
    }

    return(
        <div className="container">
            <span>Enter your details to register</span><br/><br/>
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" name="email" value={email} onChange={handleChange} /><br/>
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" name="password" value={password} onChange={handleChange} /><br/>
            
            <button onClick={userRegister}>Register</button>

        </div>
    )
}

export default Register;