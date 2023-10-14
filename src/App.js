import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      <Navbar title="Textris" aboutText="About"/>
      <div className="container my-3">
        <Textform heading = "Enter text to be analysed"/>
      </div>
      
    </>
  );
}

export default App;
