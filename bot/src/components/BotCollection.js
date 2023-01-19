import React, { useState, useEffect } from "react";


function Home() {

    const [bot, setBot] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3001/bots")
        .then(res => res.json())
        .then(data => setBot(data))
    }, [])

  return (

    <div className="row" style={{gap:"3%"}}>

        {
            bot.map(bot => {
                return (

          <div className="col-2 mb-4">
                    
          <div key={bot.name} className="row no-gutters" style={{width: "18rem;"}}>

          <div className="row">
            <div className="card p-0 m-1">

              <div className="col md-3">
              <img src={bot.avatar_url} className="card-img-top" alt="..." />
              </div>
              
              <div className="card-body">
                <h5 className="text-danger">{bot.name}</h5>
                <p className="card-text-sm">{bot.catchphrase}</p> 
                </div>
                </div> 
              </div> 
         </div>

      </div> 
                )})  
        }
    
    </div>
  

  );
}

export default Home;
