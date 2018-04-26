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
         <div class="sidebar-header p-4">
          <Userimage
          image={this.state.userInfo.image}
          />
          </div>
        <h2 class = "text-center">{this.state.userInfo.username}</h2>
        <div class= "pl-3">Points <span class="badge badge-warning">{this.state.userInfo.score}</span></div>
        <div class= "pl-3">Rank <span class="badge badge-warning">*PENDING*</span></div>
      </div>
    )
  }
}

export default User;
