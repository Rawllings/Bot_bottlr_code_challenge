// import logo from './logo.svg';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import BotCollection from './components/BotCollection';
import YourBotArmy from "./components/YourBotArmy";



function App() {
  
  return (
    <div className="App">

      <Navbar/>

      <Routes>
    
        <Route path="/" element={<BotCollection/>}/>
        <Route path="/bots" element={<YourBotArmy/>}/>
       
      </Routes>

     
    
    </div>
  );
}

export default App;
