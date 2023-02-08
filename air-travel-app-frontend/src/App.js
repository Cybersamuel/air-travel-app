import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages';
import { About } from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
  
  
  
function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route to='/' exact component={Home}/>
          <Route to='/about' component={About}/>
          <Route to='/contact' component={Contact}/>
          <Route to='/login' component={Login}/>
          <Route to='/sign-up' component={SignUp}/>
        </Routes>
    </Router>
  );
}
  
  export default App;
  
