// Imports here
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


//Component

const NavBar = () => {

    return(
        <Router>
        <div>
            <h2>Potluck Planner</h2>
            <Link to='/events'>View Potlucks</Link>
            <br />
            <Link to='/create-potluck'>Create Potluck</Link>
            <br />
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/logout'>Logout</Link>
            <i className="fas fa-sign-in-alt"></i>
        </div>
        </Router>
    )
};

//Export

export default NavBar;
