import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (


<nav className="navbar navbar-expand-lg navbar-light bg-warning sticky-top">
  <a className="navbar-brand" href="">Roastr</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mx-auto text-center">
            
      <li className="nav-item">
        <Link to="/main/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}> Feed</Link>
      </li>
      
      <li className="nav-item">
        <Link to= "/main/Best" className={window.location.pathname === "/best" ? "nav-link active" : "nav-link"}>Best</Link>
      </li>
      
      <li className="nav-item">
        <Link to="/main/Worst" className={window.location.pathname === "/worst" ? "nav-link active" : "nav-link"}>Worst</Link>
      </li>

      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Logout</Link>
      </li>
    </ul>
    

    
  </div>
</nav>






);

export default NavTabs;