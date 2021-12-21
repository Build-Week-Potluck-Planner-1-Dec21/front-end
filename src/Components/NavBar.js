// Imports here
import React from 'react';
import { Link } from 'react-router-dom';


//Component

const NavBar = () => {

    return(
        
        <div>
            <Link to='/'><h2>Potluck Planner</h2></Link>
            <Link to='/events'>View Potlucks</Link>
            <br />
            <Link to='/create-potluck'>Create Potluck</Link>
            <br />
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/logout'>Logout</Link>
            <i className="fas fa-sign-in-alt"></i>
        </div>
        
    )
};

//Export

export default NavBar;
