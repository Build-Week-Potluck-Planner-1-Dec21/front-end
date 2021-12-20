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
      <AppContainer>
      <NavBar />
        <RouteContainer>
          <Route>
            <CreateAccount />
          </Route>
          <Route>
            <LogOut />
          </Route>
          <Route>
            <CreatePotluck />
          </Route>
          <Route>
            <EventRSVP />
          </Route>
          <Route>
            <Home />
          </Route>
          <Route>
            <ViewEvents />
          </Route>
          <Route>
            <Login />
          </Route>
        </RouteContainer>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
    height: 100%;
`;
const RouteContainer = styled.div`
    display: flex;
    height: 85%;
    align-items: center;
    flex-direction: column;
`;

export default App;
