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

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// Styling Imports

import styled from 'styled-components';


function App() {



  return (
<Router>
      <AppContainer>
      <NavBar />
        <RouteContainer>
          <Switch>
          <Route>
            <EventRSVP path='rsvp'/>
          </Route>
          <Route>
            <ViewEvents path='/events'/>
          </Route>
          <Route>
            <CreatePotluck path='/create-potluck'/>
          </Route>
          <Route>
            <CreateAccount path='/create-account'/>
          </Route>
          <Route>
            <LogOut path='logout'/>
          </Route>
          <Route>
            <Login path='/login'/>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
          </Switch>
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
