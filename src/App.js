import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';

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
      <Navbar title="Textris" aboutText="About" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Textform heading = "Enter text" mode={mode} alertFunc={displayAlert}/>
      </div>
      
    </>
  );
}

export default App;
