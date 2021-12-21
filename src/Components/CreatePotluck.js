// Imports here
import React from 'react'

//Component



  const LabelStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      padding: 10,
      margin: 10,
      fontSize: 20,
  }


const CreatePotluck = () => {

    return(
        <div>
          <h1 style={{paddingBottom: '20px'}}>Create Potluck!</h1>
           
            
                <label style={LabelStyle}>Nickname:&nbsp;
                    <input 
                    type="text" 
                    name="nickname" 
                    id="nickname"
                    
                    />
                </label>
                <label style={LabelStyle}>Event Date:&nbsp;
                    <input 
                    type="text" 
                    name="date" 
                    id="date"
                    
                    />
                </label>
                <label style={LabelStyle}>Location:&nbsp;
                    <input 
                    type="text" 
                    name="location" 
                    id="location"
                    
                    />
                </label>
                <label style={LabelStyle}>Time:&nbsp;
                    <input 
                    type="text" 
                    name="time" 
                    id="time"
                    
                    />
                </label>
                <label style={LabelStyle}>Public Event?:&nbsp;
                    <input 
                    type="checkbox" 
                    name="public-event" 
                    id="public-event"
                    
                    />
                </label>
                <button id='submit' style={LabelStyle}>Submit</button>
                
        </div>
    )
};

//Export

export default CreatePotluck;