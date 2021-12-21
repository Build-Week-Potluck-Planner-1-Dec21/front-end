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

    const onChange = () => {

    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <form>
                <label>Name:
                    <input />
                </label>
                <label>Item 1:
                    <input type='text'/>
                </label>
                <label>Item 2:
                    <input type='text'/>
                </label>
                <label>Item 3:
                    <input type='text'/>
                </label>
                <button>Submit</button>
            </form>

        </div>
    )
};

//Export

export default EventRSVP;
