import React, { useState, useEffect  } from 'react';
import { useHistory } from 'react-router-dom';

const UpdateBlog = (props)=>{
    const {id, title, body} = props.location.data
    let [newtitle, setTitle] = useState(title);
    let [newpost, setPost] = useState(body)
    const history = useHistory();
    
    console.log(id,title,body)
    useEffect(async()=>{
        
       if(id== undefined){
           alert("Please select a post")
       }
    },[])

    const handleChange= (event)=>{
        if(event.target.name=="title"){
            setTitle(event.target.value)
        }else{
            setPost(event.target.value)
        }
    }
    const submitData = async()=>{
        const response = await fetch(`/update`,{
            method : 'POST',
            cache: 'no-cache',
            credentials:'include', 
            headers : {'Content-Type': 'application/json'},
            body:JSON.stringify({id, newtitle, newpost})
        })
        
        const result = await response.text()

        if(result == "true"){
            history.push("/")
            
        }else{
            alert("some thing went wrong")
        }
    }
    const deletePost = async()=>{
        const response = await fetch(`/delete`,{
            method : 'POST',
            cache: 'no-cache',
            credentials:'include', 
            headers : {'Content-Type': 'application/json'},
            body:JSON.stringify({id})
        })
        
        const result = await response.text()

        if(result == "true"){
            history.push("/")
            
        }else{
            alert("some thing went wrong")
        }
    }
    return(
        <div className="container">
            <span>Enter new blog body and title</span><br/><br/>

           <label htmlFor="title"><b>Title</b></label> 
            <input type="text" name="title" value={newtitle} onChange={handleChange}/>

            <label htmlFor="body"><b>body</b></label><br/>
            <textarea name="body" rows="10" cols="131" value={newpost}  onChange={handleChange}></textarea>
            <button onClick={submitData}>Submit</button>
            <div>
                <hr/>
                <button style={{backgroundColor:"red"}} onClick={deletePost}>Delete</button>
            </div>
        </div>
    )
}

export default UpdateBlog;