// Imports here
import React from 'react'

//Component

const CreatePotluck = () => {

    return(
        <div>
          <h1>Create your Potluck!</h1>
           
            
                <label>Nickname:
                    <input 
                    type="text" 
                    name="nickname" 
                    id="nickname"
                    
                    />
                </label>
                <label>Event Date:
                    <input 
                    type="text" 
                    name="date" 
                    id="date"
                    
                    />
                </label>
                <label>Location:
                    <input 
                    type="text" 
                    name="location" 
                    id="location"
                    
                    />
                </label>
                <label>Time:
                    <input 
                    type="text" 
                    name="time" 
                    id="time"
                    
                    />
                </label>
                <label>Public Event?:
                    <input 
                    type="checkbox" 
                    name="public-event" 
                    id="public-event"
                    
                    />
                </label>
                <button id='submit' >Submit</button>
                
        </div>
    )
};

//Export

export default CreatePotluck;