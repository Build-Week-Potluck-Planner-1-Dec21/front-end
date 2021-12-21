// Imports here
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


//Component

const NavBar = () => {

    return(
        <div>
            <h2>Potluck Planner</h2>
            <Route exact path='/' />
            <Link to='/'><button id='View-potluck'>View Potlucks</button></Link>
            <Route exact path='/' />
            <Link to='/'><button id='Create-potluck'>Create Potluck</button></Link>
            <i className="fas fa-sign-in-alt"></i>
        </div>
    )
};

//Export

export default NavBar;
