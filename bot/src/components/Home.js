import React, { useState, useEffect } from "react";


function Home() {

    const [bot, setBot] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3001/bots")
        .then(res => res.json())
        .then(data => setBot(data))
    }, [])

  return (

    <div>

        {
            bot.map(bot => {
                return (
                    
              <div key={bot.name} className="card col-sm-1 p-0 m-1" style={{width: "18rem;"}}>
              <img src={bot.avatar_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <h5 className="card-title">{bot.catchphrase}</h5>

                
              </div>
            </div> 
                )})  
        }
    
    </div>
  

  );
}

export default Home;
