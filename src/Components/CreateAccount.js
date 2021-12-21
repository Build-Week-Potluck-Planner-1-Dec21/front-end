// Imports here
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialCredentials = {
    username: '',
    password: '',
}

const initialMessage = ''

//Component

const CreateAccount = () => {

    const [ credentials, setCredentials ] = useState(initialCredentials);
    const [ loginMessage, setLoginMessage ] = useState(initialMessage)

    const { push } = useHistory();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://potluckplan.herokuapp.com/api/auth/register`, credentials)
        .then(resp => {
            console.log(resp)
            setLoginMessage(resp.data.message)
        })
        .catch(err => {
            console.log(err)
        })

    }

    return(
        <div>
         <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input 
                    type="text" 
                    name="username" 
                    id="username"
                    onChange={handleChange}
                    />
                </label>
                <label>Password:
                    <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={handleChange}
                    />
                </label>
                <button id='submit'>Submit</button>
            </form>
        </div>
    )
};

//Export

export default CreateAccount