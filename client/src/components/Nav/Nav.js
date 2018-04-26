import React from "react";
import { Link } from "react-router-dom";

const imgStyle = {
  maxHeight: 80,
};

const linkStyle ={
  color: "white",
}

// style={imgStyle}
// style={linkStyle}

const NavTabs = () => (

<nav className="navbar navbar-expand-lg navbar-light sticky-top">
  <a className="navbar-brand" href=""><img style={imgStyle} src="https://i.imgur.com/9t9gT3Y.png" alt=""/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mx-auto text-center ">
            
      <li className="nav-item px-4">
        <Link to="/main/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}> Feed</Link>
      </li>
      
      <li className="nav-item px-4">
        <Link to= "/main/Best" className={window.location.pathname === "/best" ? "nav-link active" : "nav-link"}>Best</Link>
      </li>
      
      <li className="nav-item px-4">
        <Link to="/main/Worst" className={window.location.pathname === "/worst" ? "nav-link active" : "nav-link"}>Worst</Link>
      </li>

    </ul>
    <div className="col-12 col-xs-12 col-lg-1 py-2 text-center border border-danger">
      <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>GTFO</Link>
    </div>
    
  </div>
</nav>






);

export default NavTabs;