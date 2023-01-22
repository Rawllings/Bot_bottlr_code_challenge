// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./components/BotCollection";
import BotDetails from "./components/BotDetails";
import FilterBot from "./components/FilterBot";

function App() {
  // function onFilterBots(filterValue) {
  //   setFilterBots(handleFilterChange);
  // }
  const [bot, setBot] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bots")
      .then((res) => res.json())
      .then((handleFilterChange) => setBot(handleFilterChange));
  }, []);

  const sortedHealth = bot.sort((a, b) => (a.health > b.health ? -1 : 1));

  return (
    <div className="App">
      <Navbar />
      <FilterBot />

      <Routes>
        <Route path="/" element={<BotCollection bots={sortedHealth} />} />
        <Route path="/bots/:id" element={<BotDetails />} />
        <Route path="/bots" element={<YourBotArmy />} />
      </Routes>
    </div>
  );
}

export default App;
