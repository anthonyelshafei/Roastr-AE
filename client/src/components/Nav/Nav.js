import React from "react";
import { Link } from "react-router-dom";

const imgStyle = {
  maxHeight: 130,
};

// style={imgStyle}

const NavTabs = () => (


<nav className="navbar navbar-expand-lg sticky-top p-0">
  <a className="navbar-brand text-center ml-3" href=""><img style={imgStyle} src="https://i.imgur.com/9t9gT3Y.png" alt="Roastr"/></a>
  <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    Menu
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav text-center">
            
      <li className="nav-item px-2">
        <Link to="/main/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Feed</Link>
      </li>
      
      <li className="nav-item px-2">
        <Link to= "/main/Best" className={window.location.pathname === "/best" ? "nav-link active" : "nav-link"}>Best</Link>
      </li>
      
      <li className="nav-item px-2">
        <Link to="/main/Worst" className={window.location.pathname === "/worst" ? "nav-link active" : "nav-link"}>Worst</Link>
      </li>

    </ul>

      <span className="btn col-12 col-xs-12 col-lg-1 py-2 mr-3 ml-auto">
      <Link to="/">GTFO</Link>
      </span>
    
  </div>
</nav>






);

export default NavTabs;