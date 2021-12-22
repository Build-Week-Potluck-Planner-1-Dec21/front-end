// Imports here
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// Styling

const NavStyling = {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   textAlign: 'center',
   backgroundColor: '#9b8da1',
}

const LinkStyling = {
   color: 'white',
   backgroundColor: '#9b8da1',
   textAlign: 'center',
   fontSize: 20,
   padding: 15,
}




//Component

const NavBar = () => {

    const { push } = useHistory();

    const handleLogout = () => {
    localStorage.removeItem('token');
    push('/login')

}

    return(
        
        <div style ={NavStyling}>
            <Link to='/'><h2>Potluck Planner</h2></Link>
            <Link to='/events' style={LinkStyling}>View Potlucks</Link>
            <br />
            <Link to='/create-potluck' style={LinkStyling}>Create Potluck</Link>
            <br />
            <Link to='/login' style={LinkStyling}>Login</Link>
            <br />
            <button onClick={handleLogout} style={LinkStyling}>Logout</button>
            <i className="fas fa-sign-in-alt"></i>
        </div>
        
    )
};

//Export

export default NavBar;
