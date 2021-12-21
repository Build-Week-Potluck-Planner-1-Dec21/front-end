// Imports here
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialCredentials = {
    username: '',
    password: '',
}

//Component

const CreateAccount = () => {

    const [ credentials, setCredentials ] = useState(initialCredentials);
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
        })
        .catch(err => {
            console.log(err)
        })

    }

    return(
        <div>

        </div>
    )
};

//Export

export default CreateAccount