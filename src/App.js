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

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Routing/PrivateRoute';

// Styling Imports
import styled from 'styled-components';

const App = () => {

  return (
<Router>
      <AppContainer>
      <NavBar /> 
        <RouteContainer>
          <Switch>
            <PrivateRoute exact path='/rsvp' component={EventRSVP} />
            <PrivateRoute exact path='/create-potluck' component={CreatePotluck} />
          <Route>
            <ViewEvents exact path='/events'/>
          </Route>
          <Route>
            <CreateAccount exact path='/create-account'/>
          </Route>
          <Route>
            <LogOut exact path='/logout' />
          </Route>
          {/* Login Component not rendering -- Fix second*/}
          <Route exact path='/login' >
            <Login />
          </Route>
          {/* Home Component not rendering -- Fix first*/}
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
