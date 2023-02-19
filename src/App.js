import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import React from "react";
import ParticlesBackground from './Components/ParticlesBackground';
import TopNav from './Components/TopNav/TopNav';
import About from './Components/About/About';


function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
      <div>
        <TopNav/>
      </div>
      <div>
        <Router>
          <Routes>
              <Route path='/' element={<About/>}/>
          </Routes>
        </Router>
      </div>
      
      
    </div>
  );
}

export default App;
