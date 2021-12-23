// Imports here
import React, {useState} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

//Component


const LabelStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 10,
    margin: 10,
    fontSize: 20,
}


const EditEvent = () => {

    const potluck_id = useParams();
    const { push } = useHistory();

    const initialEdit = {
        date: '',
        location: '',
        time: '',
    }

    const [ editEvent, setEditEvent ] = useState(initialEdit)

    const handleChange = (e) => {
        setEditEvent({
            ...editEvent,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/potlucks/${potluck_id}`, editEvent)
        .then(resp => {
            console.log(resp)
            push(`/events`)
        })
        .catch(err => {
            console.log(err)
        })

    }

    return(
        <div>
<h1 style={{paddingBottom: '20px'}}>Edit your Event!</h1>
           <form onSubmit={handleSubmit}>
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
           <button id='submit' style={LabelStyle}>Submit</button>
           </form>
        </div>
    )
};

//Export

export default EditEvent;