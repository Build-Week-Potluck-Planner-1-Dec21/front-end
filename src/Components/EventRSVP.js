// Imports here
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

// Initial data



//Component

const EventRSVP = ( ) => {

    const potluck_id = useParams();

    const initialRSVP = {
        username: '',
        item_name: '',
        potluck_id: potluck_id,
    }

    const [ rsvp, setRsvp ] = useState(initialRSVP)
    const { push } = useHistory();

    const handleChange = (e) => {

        setRsvp({
            ...rsvp,
            [e.target.name]: e.target.value,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/potlucks/${potluck_id}/guests`, rsvp)
        .then(resp => {
            console.log(resp)
            //push('/event/:potluck_id')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
            <h2>RSVP This Event</h2>
            <form onSubmit={handleSubmit}>
                <center>
                <label>What's your username?
                    <input 
                    type='text'
                    name='username'
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>What are you bringing? (one item only)
                    <input 
                    type='text'
                    name='item_name'
                    onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
                </center>
            </form>

        </div>
    )
};

//Export

export default EventRSVP;
