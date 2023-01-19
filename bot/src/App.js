// import logo from './logo.svg';
import {Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BotDetails from "./components/BotDetails";

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="home" element={<Home/>}/>
        <Route path="/bot" element={<BotDetails/>}/>
      </Routes>

     
     <Home/>
    </div>
  );
}

export default App;
