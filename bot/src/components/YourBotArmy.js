import React, { useState, useEffect } from "react";

function YourBotArmy() {
  const [items, setItems] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bots")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  function renderYourArmy(id) {
    const item = items.find((item) => item.id === id);
    const favorite = army.find((item) => item.id === id);
    favorite ? alert("existing") : setArmy([...army, item]);
    console.log("helo")
  }

  function handleDelete(id) {
    const filteredArmy = army.filter((item) => item.id !== id);
    setArmy(filteredArmy);
  }

  
  return (
    <div>
      <div className="row" style={{ gap: "3%" }}>
        <h1> Your Favorite Bot Army</h1>

        {army.map((armies) => {
          return (
            <div onClick={() => handleDelete(armies.id)} className="col-2 mb-4">
              <div
                key={armies.name}
                className="row no-gutters"
                style={{ width: "100%" }}
              >
                <div className="row">
                  <div className="card p-0 m-1">
                    <div className="col md-3">
                      <img
                        src={armies.avatar_url}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="text-danger">{armies.name}</h5>
                      <p className="card-text">{armies.catchphrase}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="row" style={{ gap: "3%" }}>
        <h1> Choose Your Favorite Bot Army</h1>
        {items.map((bot) => {
          return (
            <div onClick={() =>renderYourArmy(bot.id)} className="col-2 mb-4">
              <div
                key={bot.name}
                className="row no-gutters"
                style={{ width: "18rem;" }}
              >
                <div className="row">
                  <div className="card p-0 m-1">
                    <div className="col md-3">
                      <img
                        src={bot.avatar_url}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="text-danger">{bot.name}</h5>
                      <p className="card-text-sm">{bot.catchphrase}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YourBotArmy;
