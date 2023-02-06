import "bootstrap/dist/css/bootstrap.min.css"
// import axios from 'axios';

import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import SignUp from './components/pages/signup';
import Login from './components/pages/login';
  

function App() {

  // componetDidMount(){
  //   axios.get('/flights/')
  //   .then(response => {
  //     console.log(response.data);
  //   });
  // }

  //   onSumbitFlight() {
  //     axios.post('/flights/add', {
  //       flightName: 'Caxmerian Airlines',
  //       flightNumber: 330,
  //       IATAcode: 'CX'
  //     })
  //     .then(response => {
  //       console.log(response);
  //     });
  //   }

  //   onSubmitUser() {
  //     axios.post('/users/add', {
  //       username: 'Steve Efesoa',
  //       email: 'steveefesoa@gmail.com',
  //       password: 'thumbuthumbu'
  //     }).then(response => {
  //       console.log(response)
  //     })
  //   }
  
    return(
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
          </Routes>
        </Router>
        {/* <center>
          <button className="button" onClick={() => this.onSumbitFlight}>
            Add a flight to the system
          </button><br/>
          <button className="button" onClick={() => this.onSubmitUser}>
            Add a user to the system.
          </button>
        </center>        */}
      </div>
    );
  };



export default App;

