import React, { useState, useEffect  } from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
const Header = (props)=>{
    const[user,setUser] = useState([]) 

    useEffect(async()=>{
        const response = await fetch("/auth/checkLogin",{
        })
        const result = await response.text()  
        console.log(result)
        setUser(result)     
    },[])
    const handleChange = async(mode)=>{
        if(mode == "logout"){
            const response =  await fetch("/auth/logout",{
            })
            setUser("false")
        }else{
            props.ChangeMode(mode)
        }
    }
    return(
        <div className="header">
            <ul>
                <li><a className="active" href="#home">Blogger</a></li>
                {
                    user !="false" ?   
                        <div style={{float:"right",color:'white',marginRight:"10px"}}>
                            <li><a>{user}</a></li>
                            <li><a onClick={()=>handleChange("logout")}>Logout</a></li>
                        </div>
                    :
                    <>
                        <li style={{float:"right"}}><Link to="/login">Login</Link></li>
                        <li style={{float:"right"}}><Link to="/register">Register</Link></li>
                    </>
                }

            </ul>
        </div>
    )
}

export default Header;