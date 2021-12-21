// Imports here
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Initial data

const initialEvent = {}

//Component

const EventRSVP = () => {

    const [ event, setEvent ] = useState(initialEvent);
    const { push } = useHistory();

    const handleChange = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <h2>RSVP This Event</h2>
            <form>
                <center>
                <label>Name:
                    <input />
                </label>
                <br />
                <h4>What are you bringing?</h4>
                <label>Item 1:
                    <input 
                    type='text'
                    />
                </label>
                <br />
                <label>Item 2:
                    <input 
                    type='text'
                    placeholder='optional'
                    />
                </label>
                <br />
                <label>Item 3:
                    <input 
                    type='text'
                    placeholder='optional'
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
