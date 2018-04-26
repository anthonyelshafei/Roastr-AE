import React from "react";
import Userimage from "../Userimage";

class User extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h2 class = "text-center">User Name</h2>
         <div className="sidebar-header">
          <Userimage/>
          </div>
        <div>Points <span className="badge badge-pill badge-warning float-right">3</span></div>
        <div>Rank <span className="badge badge-pill badge-warning float-right">3</span></div>
      </div>
    )
  }
}

export default User;
