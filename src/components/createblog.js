import React from 'react';  
import { useState, useEffect  } from 'react';
import { useHistory } from 'react-router-dom';

const CreateBlog = (props) => {
    const [title, settitle] = useState("")
    const [body, setBody] = useState("")  
    const history = useHistory();

    const handleChange=(event)=>{
        if(event.target.name == "title"){
            settitle(event.target.value)
        }else{
            setBody(event.target.value)
        }
    }

    const submitData = async() => {
        const response = await fetch(`/create`,{
            method : 'POST',
            cache: 'no-cache',
            credentials:'include', 
            headers : {'Content-Type': 'application/json'},
            body:JSON.stringify({title, body})
        })
        
        const result = await response.text()

        if(result == "true"){
            history.push("/")
            
        }else{
            alert("Login First")
        }
    }

    return(
        <div className="container">
            <span>Enter blog body and title</span><br/><br/>

            <label htmlFor="title"><b>Title</b></label> 
            <input type="text" name="title" value={title} onChange={handleChange}/>

            <label htmlFor="body"><b>body</b></label><br/>
            <textarea name="body" rows="10" cols="131" value={body}  onChange={handleChange}></textarea>
            <button onClick={submitData}>Submit</button>
        </div>
    )
}

export default CreateBlog;