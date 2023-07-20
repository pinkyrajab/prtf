import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import React from "react";
import ParticlesBackground from './Components/ParticlesBackground';
import MainComponent from './Components/MainComponent/MainComponent';

function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
      <div>
        <Router>
          <Routes>
              <Route path='/' element={<MainComponent/>}/>
          </Routes>
        </Router>
      </div>
      
      
    </div>
  );
}

export default App;
