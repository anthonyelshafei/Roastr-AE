import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo"

const NavTabs = () => (
  <ul className="nav nav-tabs">
        
        <li className="nav-item">
        <Link to="/Logo" className={window.location.pathname === "/feed" ? "nav-link active" : "nav-link"}><Logo/></Link>
        </li>
        
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
);

export default NavTabs;