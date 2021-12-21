import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialCredentials = {
    username: '',
    password: '',
}

const Login = ( ) => {

    const [ credentials, setCredentials ] = useState(initialCredentials);
    const { push } = useHistory();


    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        axios.post(`https://potluckplan.herokuapp.com/api/auth/login/`, credentials)
        .then( resp => {
            const { token, message, user_id } = resp.data
            localStorage.setItem('token', token);
            localStorage.setItem('message', message);
            localStorage.setItem('user_id', user_id);
            push('/create-potluck')
        })
        .catch(err => {
            console.log(err)
        })

    }

    return(

        <div>
         <h1>Login</h1>
            <div>Errors here</div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input 
                    type="text" 
                    name="username" 
                    id="username"
                    onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={onChange}
                    />
                </label>
                <button id='submit' >Submit</button>
            </form>
           <br />
           <p>Don't have an account?</p>
           <br />
           <a href='/create-account'>Click here.</a>
        </div>
    )
};

//Export

export default Login;
