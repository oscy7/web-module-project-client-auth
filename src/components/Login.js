import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//STEP 1 FOR TASK 2: 


const Login = () => {

    //STEP1: USESTATE SET CREDENTIALS
    //STEP2: ONCHANGE={handleChange}
    //STEP 3: HANDLESUMBIT! use axios call
    const [cred, setCred]= useState ({
        username: '',
        password: ''
    })
    const { push } = useHistory();

    const handleChange = (e) => {
        setCred({
            ...cred,
            //our value is set to name.
            [e.target.name]: e.target.value
        })
    }
//post to /api/login
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
            .then( res => {
                console.log(res)
                //Dont know what this does
                localStorage.setItem('token', res.data.token);
                //Pushing takes us to /friends when we click submit.
                push('/friends');
            })
            .catch(err => {
                console.log(err)
            })
    }

    console.log(cred)
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input onChange={handleChange} name='username' id='username' />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input onChange={handleChange} type='password' name='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </div>
    
    )
  }

export default Login;