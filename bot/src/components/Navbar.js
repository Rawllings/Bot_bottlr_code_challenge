import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return(
    <div>
          <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <h1>Bot Botllr</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/bot">Details</NavLink>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
