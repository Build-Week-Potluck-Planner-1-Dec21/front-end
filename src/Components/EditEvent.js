// Imports here
import React from 'react'
import { useHistory, useParams } from 'react-router-dom';

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

    const initialEdit = {
        name: '',
        date: '',
        location: '',
        time: '',
    }

    const potluck_id = useParams();

    const handleChange = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
<h1 style={{paddingBottom: '20px'}}>Edit your Event!</h1>
           <form onSubmit={handleSubmit}>
           <label style={LabelStyle}>Nickname:&nbsp;
               <input 
               type="text" 
               name="nickname" 
               id="nickname"
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
           </form>
           <button id='submit' style={LabelStyle}>Submit</button>
        </div>
    )
};

//Export

export default EditEvent;