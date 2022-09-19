import React, {useState} from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";

import AnimalPads from "./components/AnimalPads";
import ClassicDrumPads from "./components/ClassicDrumPads";
import AnaloguePads from "./components/AnaloguePads";
import { Btn } from "./components/styled";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [drumStyle, setDrumStyle] = useState(true) 

  const handleClick = () => {
    if (drumStyle === true ) {
      setDrumStyle(false)
    } else {
      setDrumStyle(true)
    }
    console.log(drumStyle)
  }




  return (
    <div className="App">
      <h1>Dingo Drum</h1>

      <div className="btn-group">
        <Link to="/About">
          <Btn>About</Btn>
        </Link>
        <Link to="/AnaloguePads">
          <Btn>Analogue Kit</Btn>
        </Link>
        &nbsp;
        <Link to="/ClassicDrumPads" >{drumStyle ===false && <Btn onClick={handleClick} >Animal Drum</Btn>}</Link>&nbsp;
        <Link to="/AnimalPads" >{drumStyle ===true && <Btn onClick={handleClick} >Classic Drum</Btn>}</Link>
      </div>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/AnaloguePads" element={<AnaloguePads />} />
        <Route path="/ClassicDrumPads" element={<ClassicDrumPads />} />
        <Route path="/AnimalPads" element={<AnimalPads />} />
        <Route path="/" element={<Navigate to="/ClassicDrumPads" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
