import React from "react";
import Userimage from "../Userimage";

class User extends React.Component {
  render() {
    return (
      <div className="container-fluid">
         <div className="sidebar-header p-4">
          <Userimage/>
          </div>
        <h2 class = "text-center">User Name</h2>
        <div className= "pl-3">Points <span className="badge badge-warning float-right">3</span></div>
        <div className= "pl-3">Rank <span className="badge badge-warning float-right">3</span></div>
      </div>
    )
  }
}

export default User;
