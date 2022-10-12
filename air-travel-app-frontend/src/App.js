import React, { createFactory } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import FlightsList from  "./components/flights-list.components";
import createFlight from "./components/create-flights.component";
import CreateUser from "./components/create-user.component";
import ChangeFlightInfo from "./components/change-flights.component"


function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={FlightsList}/>
      <Route path="/change/:id" component={ChangeFlightInfo}/>
      <Route path="/create" component={createFlight}/>
      <Route path="/user" component={CreateUser}/>
      <Route path="/user/:id" component={ChangeUserInfo}/>
    </Router>
  );
}

export default App;

