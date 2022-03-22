import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/' element = {<Landing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
