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
            <ViewEvents exact path='/events'/>
          </Route>
          <Route>
            <CreatePotluck exact path='/create-potluck'/>
          </Route>
          <Route>
            <CreateAccount exact path='/create-account'/>
          </Route>
          <Route>
            <LogOut exact path='/logout' />
          </Route>
          <Route exact path='/login' component={Login} />
          <Route>
            <EventRSVP exact path='/rsvp' />
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
