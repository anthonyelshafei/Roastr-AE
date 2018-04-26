import React from "react";
import Userimage from "../Userimage";
import axios from "axios";

class User extends React.Component {

  state = {
    userInfo: {}
  }

  componentDidMount(){

    axios.get("/api/sessioninfo").then(res => {
      this.setState({userInfo: res.data})
  })
};

  render() {
    return (
      <div className="container-fluid">
         <div className="sidebar-header">
          <Userimage
          image={this.state.userInfo.image}
          />
          <h2 class = "text-center">{this.state.userInfo.username}</h2>
          </div>
        <div>Points <span className="badge badge-pill badge-warning float-right">{this.state.userInfo.score}</span></div>
        <div>Rank <span className="badge badge-pill badge-warning float-right">*PENDING*</span></div>
        <br/>
      </div>
    )
  }
}

export default User;
