import React from "react";
import User from "../User";
// are the imports correct?

class Sidebar extends React.Component {
  render() {
    return (


        <div class="wrapper">

        <nav id="sidebar">
            <div class="sidebar-header">
            <img src="cinqueterre.jpg" class="img-circle" alt="Cinque Terre">
            </div>

            <ul class="Stats">
                <li><a href="#">Points</a></li>
                <li><a href="#">Ranks</a></li>
            </ul>
        </nav>

        </div>


    )
  }
}

export default Sidebar;
