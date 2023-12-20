import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import React from "react";
import ParticlesBackground from './Components/ParticlesBackground';
// components
import Home from './Components/Home'
import InitialProjs from './Components/Projects/InitialProjs';
function App() {
  return (
    <div className="App">
    <div>
      <Router>
      <ParticlesBackground />
      <div style={{height:"35px"}}>
      </div>
      <div className='container' style={{backgroundColor:"white!important"}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes> 
      </div>
      </Router>
    </div>
  </div>
  
  );
}

export default App;
