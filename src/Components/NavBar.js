// Imports here
import React from 'react';
import { Link } from 'react-router-dom';


//Component

const NavBar = () => {

    const handleLogout = (e) => {
        console.log(e.target)
    }

    return(
        
        <div>
            <Link to='/'><h2>Potluck Planner</h2></Link>
            <Link to='/events'>View Potlucks</Link>
            <br />
            <Link to='/create-potluck'>Create Potluck</Link>
            <br />
            <Link to='/login'>Login</Link>
            <br />
            <button onClick={handleLogout}>Logout</button>
            <i className="fas fa-sign-in-alt"></i>
        </div>
        
    )
};

//Export

export default NavBar;
