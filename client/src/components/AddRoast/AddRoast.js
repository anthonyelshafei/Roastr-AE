import React from "react";
import API from "../../utils/API";
import axios from "axios";

class AddRoast extends React.Component { 
  
  state = {
    roasters: [],
    userInfo: {},
    recipient: "",
    roast: ""
  }

  componentDidMount(){
    //grabs all roasters
    API.getUsers().then(res => {
        console.log(res.data)
        this.setState({roasters: res.data})
    })

    axios.get("/api/sessioninfo").then(res => {
      this.setState({userInfo: res.data})
  })
};

handleInputChange = event => {
  let value = event.target.value;
  const name = event.target.name;
  this.setState({ [name]: value })
};

handleFormSubmit = event => {
  event.preventDefault();
  var roastData = {
      roastr: this.state.userInfo.username,
      recipient: this.state.recipient,
      roast: this.state.roast
  }
  API.addRoast(roastData).then(
      this.setState({recipient: "", roast: ""})
  )
}

//<form onSubmit={this.createRoast}>
  render() {
    return (
        <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <select name="recipient" className="form-control" id="userSearch" onChange={this.handleInputChange} value={this.state.recipient}>
                <option default>Select a Roaster...</option>
                {this.state.roasters.map(item => 
                <option>{item.username}</option>
                )}
              </select>
            </div>
            
            <div className="form-group">
              <textarea name="roast" className="form-control" id="userSearch" rows="3" placeholder="Write your roast here..." onChange={this.handleInputChange} value={this.state.roast}>{this.state.roast}</textarea>
              </div>
            <button type="button" className="btn col-12">Roast</button>
    );
  }
}

export default AddRoast;