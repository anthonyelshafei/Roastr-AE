import React from "react";
import { Link } from "react-router-dom";

// linkstyle={imgStyle}

const NavTabs = () => (


<nav className="navbar navbar-expand-lg py-3">
  <button className="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    +
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">

    <ul className="navbar-nav text-center mr-auto">
            
      <li className="nav-item mx-3 border-bottom border-warning">
        <Link to="/main/"  className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Feed</Link>
      </li>
      
      <li className="nav-item mx-3 border-bottom border-warning">
        <Link to= "/main/Best" className={window.location.pathname === "/best" ? "nav-link active" : "nav-link"}>Best</Link>
      </li>
      
      <li className="nav-item mx-3 border-bottom border-warning">
        <Link to="/main/Worst" className={window.location.pathname === "/worst" ? "nav-link active" : "nav-link"}>Worst</Link>
      </li>

    </ul>
      
      <div className="col-12 col-xs-12 col-lg-1 py-2 mr-3 ml-auto text-center"><Link to="/main/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Share</Link>
</div>
      <div className="col-12 col-xs-12 col-lg-1 py-2 mr-3 mr-0 text-center"><Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>GTFO</Link>
</div>
    
  </div>
  
</nav>






);

export default NavTabs;