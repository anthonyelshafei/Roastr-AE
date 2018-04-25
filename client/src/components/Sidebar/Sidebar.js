import React from "react";
import User from "../User";
// are the imports correct?

class Sidebar extends React.Component {
  render() {
    return (


        <div class="container">

        <nav id="sidebar">
        
            <div class="sidebar-header">
            <img src="cinqueterre.jpg" class="img-circle" alt="Cinque Terre"/>
            </div>

            <h2>Username</h2>

            <div class="Stats">
                <div>Points <span class="badge badge-warning">3</span></div>
                <div>Rank <span class="badge badge-warning">3</span></div>
            </div>
        </nav>

        </div>


    )
  }
}

export default Sidebar;
