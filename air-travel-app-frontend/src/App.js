import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/pages';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Login } from './components/pages/Login';
import { SignUp } from './components/pages/SignUp';
//import axios from 'axios';

  
  
function App() {
  return (
    
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
      </Router>
    </div>
    

  );
}
  
  export default App;
  
