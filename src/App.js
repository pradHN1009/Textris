import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'

function App() {

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#0d3741"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <>
      <Navbar title="Textris" aboutText="About" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container my-3">
        <Textform heading = "Enter text" mode={mode}/>
      </div>
      
    </>
  );
}

export default App;
