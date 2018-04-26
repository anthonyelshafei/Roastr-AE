import React from "react";
import Userimage from "../Userimage";

const square = {
  width: "30%",
  paddingBottom: "30%",
};

// style={imgStyle}

class User extends React.Component {
  render() {
    return (
      <div className="container-fluid">
         <div className="sidebar-header">
            
              <Userimage/>
            
          <h2 class = "text-center">User Name</h2>
          </div>
        <div>Points <span className="badge badge-pill badge-warning float-right">3</span></div>
        <div>Rank <span className="badge badge-pill badge-warning float-right">3</span></div>
        <br/>
      </div>
    )
  }
}

export default User;
