// Imports here
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

// Initial data


const initialItem = {
    item_name: ''
}

//Component

const EventRSVP = () => {

    const [ item, setItem ] = useState(initialItem)
    const { push } = useHistory();

    const handleChange = (e) => {

        setItem({
            ...item,
            [e.target.name]: e.target.value,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        // confirm URL with Brian
        .post(`/potlucks/:potluck_id/items`, item)
        .then(resp => {
            console.log(resp)
            //push('/event/:id')
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
                <label>Name:
                    <input 
                    type='text'
                    />
                </label>
                <br />
                <h4>What are you bringing?</h4>
                <label>Item 1:
                    <input 
                    type='text'
                    name='item_name'
                    onChange={handleChange}
                    />
                </label>
                <br />
                <label>Item 2:
                    <input 
                    type='text'
                    />
                </label>
                <br />
                <label>Item 3:
                    <input 
                    type='text'
                    />
                </label>
                <br />
                <br />
                <button>Submit</button>
                </center>
            </form>

        </div>
    )
};

//Export

export default EventRSVP;
