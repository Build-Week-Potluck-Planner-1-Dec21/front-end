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

    const handleChange = () => {

    }

    const handleSubmit = () => {
        
    }

    return(
        <div>

        </div>
    )
};

//Export

export default CreateAccount