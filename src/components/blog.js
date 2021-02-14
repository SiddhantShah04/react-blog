import React, { useState, useEffect  } from 'react';
import Header from "./header";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
const Blog = (props)=>{
    
    const[post,setPost] = useState([]) 
    const [id, setId] = useState("")

    useEffect(async()=>{
        const response = await fetch("/blog",{
        })
        const result = await response.json()  
        setPost(result)
        
        console.log(result)
    },[])
  
    return(
        <div>
            <Header />
            <p><Link to="createblog" style={{marginLeft:"10px"}}>New</Link></p>
            <hr/>
                {post.map((row,i)=>
                <article className="post" key={i}>
                <header>
                    <div>
                        <h1>{row["title"]}</h1>
                        {row["title"]!==undefined?<div className="about">by {row["username"]} on {row["date"]}</div>:null}
                    </div>
                    {post[post.length-1].id == row["authorId"] ? <Link style={{float:"right",display: "block",marginRight:"10px"}} to={{
                        pathname: "/updateblog",
                        data: {"id":row["id"],"title":row["title"],"body":row["body"]} // your data array of objects
                    }}> Edit</Link> : null}
                </header>
                <p className = "body">{row["body"]}</p>
                {row["title"]!==undefined?<hr/>:null}

            </article>
            )}
            
        </div>
    )
}
export default Blog;