import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BotDetails() {
  const { param } = useParams();

  const [botDetails, setBotDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/bots/${param.id}`)
      .then((res) => res.json())
      .then((data) => setBotDetails(data));
  }, [param]);

  return (
    <>
      <h1>Bot {param} </h1>

      <div class="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            {botDetails.map((Details, index) => {
              return (
                <div className="card-body" key={index}>
                  <h5 className="card-title">{Details.name}</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">{Details.health}</small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">{Details.damage}</small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">{Details.armor}</small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">{Details.bot_class}</small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">{Details.catchphrase}</small>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BotDetails;
