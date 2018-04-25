import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (


<nav class="navbar navbar-expand-lg navbar-light bg-warning sticky-top">
  <a class="navbar-brand" href="">Roastr</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
            
      <li className="nav-item">
        <Link to="/Feed" className={window.location.pathname === "/feed" ? "nav-link active" : "nav-link"}> Feed</Link>
      </li>
      
      <li className="nav-item">
        <Link to= "/Best" className={window.location.pathname === "/best" ? "nav-link active" : "nav-link"}>Best</Link>
      </li>
      
      <li className="nav-item">
        <Link to="/Worst" className={window.location.pathname === "/worst" ? "nav-link active" : "nav-link"}>Worst</Link>
      </li>
    </ul>
  </div>
</nav>






);

export default NavTabs;