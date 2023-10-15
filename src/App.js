
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const displayAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {setAlert(null)},1000)
  }
  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#0d3741"
      displayAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      displayAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      <Router>
      <Navbar title="Textris" aboutText="About" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<Textform heading = "Enter text" mode={mode} alertFunc={displayAlert}/>}/>
          <Route index element={<Textform heading = "Enter text" mode={mode} alertFunc={displayAlert}/>}/>
          <Route exact path="/about" element={<About />} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
