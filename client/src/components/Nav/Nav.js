import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
        
        <li className="nav-item">
        <Link to="/blog" className={window.location.pathname === "/feed" ? "nav-link active" : "nav-link"}><Logo/></Link>
        </li>
        
        <li className="nav-item">
        <Link to="/feed" className={window.location.pathname === "/feed" ? "nav-link active" : "nav-link"}> Feed</Link>
        </li>
        
        <li className="nav-item">
        <Link to= "/best" className={window.location.pathname === "/best" ? "nav-link active" : "nav-link"}>Best</Link>
        </li>
        
        <li className="nav-item">
        <Link to="/worst" className={window.location.pathname === "/worst" ? "nav-link active" : "nav-link"}>Worst</Link>
        </li>
  </ul>
);

export default NavTabs;