import React, { useState } from "react";

function FilterBot() {
  function filterBotClass(event) {
    // console.log(event.target.value);
    filterBots(event.target.value);
  }
  const [bot, setBot] = useState([]);
  const [filterBots, setFilterBots] = useState("all");

  const handleFilterChange = bot.filter((list) => {
    if (filterBots === "defender") {
      return list.bot_class === "Defender";
    } else if (filterBots === "support") {
      return list.bot_class === "Support";
    } else if (filterBots === "assault") {
      return list.bot_class === "Assault";
    } else if (filterBots === "witch") {
      return list.bot_class === "Witch";
    } else if (filterBots === "medic") {
      return list.bot_class === "Medic";
    } else if (filterBots === "captain") {
      return list.bot_class === "Captain";
    } else {
      return list;
    }
  });

  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={filterBotClass}
    >
      <option selected value="all">
        All
      </option>
      <option value="defender">Defender</option>
      <option value="support">Support</option>
      <option value="assault">Assault</option>
      <option value="witch">Witch</option>
      <option value="medic">Medic</option>
      <option value="captain">Captain</option>
    </select>
  );
}

export default FilterBot;
