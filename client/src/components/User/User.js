import React from "react";
import Userimage from "../Userimage";
import axios from "axios";
import Logo from "../Logo";

const imgStyle = {
  marginTop: "-em",
  zIndex: -1,
};
// style={imgStyle}

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
         
        <Logo />
        <div className="col-10 offset-1">
        <Userimage image={this.state.userInfo.image} style={imgStyle}/>
         </div>
          
          <h2 className = "text-center">{this.state.userInfo.username}</h2>

          </div>
        <div>Points <span className="badge badge-pill badge-warning float-right">{this.state.userInfo.score}</span></div>
        <div>Rank <span className="badge badge-pill badge-warning float-right">*PENDING*</span></div>
        <br/>
      </div>
    )
  }
}

export default User;
