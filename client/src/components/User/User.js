import React from "react";
import Userimage from "../Userimage";

class User extends React.Component {
  render() {
    return (
      <div className="container-fluid">
         <div class="sidebar-header p-4">
         <Userimage/>
        </div>
        <h2 class = "text-center">User Name</h2>
        <div class= "pl-3">Points <span class="badge badge-warning">3</span></div>
        <div class= "pl-3">Rank <span class="badge badge-warning">3</span></div>
      </div>
    )
  }
}

export default User;
