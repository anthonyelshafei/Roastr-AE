import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="container-fluid">
         <div class="sidebar-header">
            <img src="cinqueterre.jpg" class="img-circle" alt="Cinque Terre"/>
        </div>
        <h2>User Name</h2>
        <div>Points <span class="badge badge-warning">3</span></div>
        <div>Rank <span class="badge badge-warning">3</span></div>
      </div>
    )
  }
}

export default User;
