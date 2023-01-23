import { useParams } from "react-router-dom";

function BotDetails({ bots }) {
  const { param } = useParams();

  return (
    <>
      <h1>Bot {param} </h1>

      <div class="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">{bots}</div>
        </div>
      </div>
    </>
  );
}

export default BotDetails;
