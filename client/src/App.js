/*
The following import will run the the function from another page and import React, Hashrouter as router, 
router,route.
*/
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home.js';
import Appointment from './components/Appointment';
import Patient from './components/Patient';
import Contact from './components/Contact';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
// import Header from './Header';
import Body from './Body';
/*The following function App will run all the function imported from the other pages and load the home page */
function App() {
  return (
    <div>
    <Router>
      <div className='App'>
        <header className='App=header'>
          <Nav />
          
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/Appointment" exact component={Appointment} />
            <Route path="/Patient" exact component={Patient} />
            <Route path="/Contact" exact component={Contact} />
          </Routes>
        </header>
      </div>
    </Router>
    
    <Body/>
    
    </div>
    /*The given code will import the function from the body.js and run in the main App */
  );
}

export default App;