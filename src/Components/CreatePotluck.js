// Imports here
import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

// Styling

  const LabelStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      padding: 10,
      margin: 10,
      fontSize: 20,
  }

// Initial data

const initialPotluck = {
     potluck_name: "",
     date: "",
     time: "",
     location: "",
     public: false,
}

// Component

const CreatePotluck = () => {

    const [ potluck, setPotluck ] = useState(initialPotluck)
    const { push } = useHistory();

    const handleChange = (e) => {

        setPotluck({
            ...potluck,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post(`/potlucks`, potluck)
        .then(resp => {
            console.log(resp)
            push('/events')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
          <h1 style={{paddingBottom: '20px'}}>Create Potluck!</h1>
           
            <form onSubmit={handleSubmit}>
                <label style={LabelStyle}>Nickname:&nbsp;
                    <input 
                    type="text" 
                    name="potluck_name" 
                    id="potluck_name"
                    onChange={handleChange}
                    />
                </label>
                <label style={LabelStyle}>Event Date:&nbsp;
                    <input 
                    type="text" 
                    name="date" 
                    id="date"
                    onChange={handleChange}
                    />
                </label>
                <label style={LabelStyle}>Location:&nbsp;
                    <input 
                    type="text" 
                    name="location" 
                    id="location"
                    onChange={handleChange}
                    />
                </label>
                <label style={LabelStyle}>Time:&nbsp;
                    <input 
                    type="text" 
                    name="time" 
                    id="time"
                    onChange={handleChange}
                    />
                </label>
                <label style={LabelStyle}>Public Event?:&nbsp;
                    <input 
                    type="checkbox" 
                    name="public" 
                    id="public"
                    onChange={(e) => {
                        handleChange({
                            target: {
                                name: e.target.name,
                                value: e.target.checked,
                            }
                        })
                    }}
                    />
                </label>
                <button id='submit' style={LabelStyle}>Submit</button>
            </form>
        </div>
    )
};

//Export

export default CreatePotluck;