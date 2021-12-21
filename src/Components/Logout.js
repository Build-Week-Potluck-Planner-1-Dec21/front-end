// Imports here
import React from 'react'


//Component

const Logout = () => {

    const handleLogout = (e) => {
        console.log(e.target)
    }

    return(
        <div>
         <button onClick={handleLogout}>Logout</button>
        </div>
    )
};

//Export

export default Logout;