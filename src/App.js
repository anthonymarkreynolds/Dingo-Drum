import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";

import AnimalPads from './components/AnimalPads'
import ClassicDrumPads from './components/ClassicDrumPads';
import {Btn} from './components/styled'
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Dingo Drum</h1>

      <div className="btn-group">
        <Link to="/About" ><Btn>About</Btn></Link>&nbsp;
        <Link to="/ClassicDrumPads" ><Btn>Classic Drum</Btn></Link>&nbsp;
        <Link to="/AnimalPads"><Btn>Animal Drum</Btn></Link>
      </div>
      <Routes>
        <Route path="/About" element={<About />}/>
        <Route path="/ClassicDrumPads" element={<ClassicDrumPads />}/>
        <Route path="/AnimalPads" element={<AnimalPads />}/>
        <Route path='/' element={<Navigate to='/ClassicDrumPads'/>}/>
      </Routes>
    
    <Footer />  
    </div>
  );
}

export default App;
