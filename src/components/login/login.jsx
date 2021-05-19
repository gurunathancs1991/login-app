import React, { useState } from 'react';
import './login.css';
import  PropTypes from 'prop-types';




async function loginUser(credentials){
    return fetch("http://localhost:8080/login", {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
          
        },
        body: JSON.stringify(credentials)
    }).then(data=> data.json())
    
}



export default function Login({setToken}) {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const SubmitHandler = async (e)=>{
        e.preventDefault();
        const token = await loginUser({name, password});
        setToken(token);
    }

  return(
    <form onSubmit={SubmitHandler}>
      <label>
        <p>Username</p>
        <input type="text" onChange = {(e)=>{setName(e.target.value)}} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange = {(e)=>{setPassword(e.target.value)}} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}