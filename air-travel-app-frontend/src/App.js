import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./"

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={FlightsList}/>
    </Router>
  );
}

export default App;
