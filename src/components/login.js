import React, { useState, useEffect  } from 'react';
import { useHistory } from 'react-router-dom';


const Login = (props)=>{
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
    // input handle functions
    
    const handleChange = (event)=>{
        console.log(event.target.name)
        if(event.target.name === "email"){
            setEmail(event.target.value)
        }else{
            setPassword(event.target.value)
        }
    }

    // Login button onclick event
    const userLogin = async()=>{
        const response = await fetch(`/auth/login`,{
            method : 'POST',
            cache: 'no-cache',
            credentials:'include', 
            headers : {'Content-Type': 'application/json'},
            body:JSON.stringify({email,password})
        })
        
        const result = await response.text()
        if(result=="true"){
            history.push("/")
        }else{
            alert("Register first")
        }
    }

    return(
        <div className="container">
            <span>Enter your details to login</span><br/><br/>
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" value={email} onChange={handleChange}  placeholder="Enter Email" name="email" required />
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password"  name="password" value={password} onChange={handleChange} required></input>
            
            <button onClick={userLogin}>login</button>

        </div>
    )
}

export default Login;