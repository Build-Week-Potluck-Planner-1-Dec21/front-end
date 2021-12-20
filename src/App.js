import './App.css';
import React from 'react';

// Importing Components

import CreateAccount from './Components/CreateAccount';
import LogOut from './Components/Logout';
import CreatePotluck from './Components/CreatePotluck';
import EventRSVP from './Components/EventRSVP';
import Home from './Components/Home';
import NavBar from './Components/NavBar'
import ViewEvents from './Components/ViewEvents'
import Login from './Components/Login';

// Routing

import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Styling Imports

import styled from 'styled-components';


function App() {



  return (
    <Router>
      <header className="App-header">
        <h1>Potluck Planner</h1>
      </header>
    </Router>
  );
}

export default App;
