import React from "react";
import API from "../../utils/API";
import axios from "axios";

class AddRoast extends React.Component { 
  
  state = {
    roasters: [],
    userInfo: {},
    recipientName: "",
    roast: ""
  }

  componentDidMount(){
    //grabs all roasters
    API.getUsers().then(res => {
        console.log(res.data)
        this.setState({roasters: res.data})
    })

    axios.get("/api/sessioninfo").then(response => {
      this.setState({userInfo: response.data})
  })
};



handleInputChange = event => {
  let value = event.target.value;
  const name = event.target.name;
  this.setState({ [name]: value })
  console.log(name, value)
};

handleFormSubmit = event => {
  event.preventDefault();

  if(this.state.userInfo.username === this.state.recipientName){
    alert("You can't roast yourself, ya dingus!")
  }
  else{
    API.findRecipient(this.state.recipientName).then(res => {
      
      var recipientInfo = res.data
      
      var roastData = {
        roastrName: this.state.userInfo.username,
        roastrImage: this.state.userInfo.image,
        roastrScore: this.state.userInfo.score,
        recipientName: recipientInfo.username,
        recipientImage: recipientInfo.image,
        recipientScore: recipientInfo.score,
        roast: this.state.roast
    }
      console.log(roastData)
      API.addRoast(roastData).then(
      this.setState({recipientName: "", roast: ""})
    )
  })
  
  }
}

//<form onSubmit={this.createRoast}>
  render() {
    return (
        <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <select name="recipientName" className="form-control" id="userSearch" onChange={this.handleInputChange} value={this.state.recipientName}>
                <option default>Select someone to Roast...</option>
                {this.state.roasters.map(item => 
                <option key={item._id}>{item.username}</option>
                )}
              </select>
            </div>
            
            <div className="form-group">
              <textarea name="roast" className="form-control" id="userSearch" rows="3" placeholder="Write your roast here..." onChange={this.handleInputChange} value={this.state.roast}>{this.state.roast}</textarea>
              </div>
            <button type="submit" className="btn col-12">Roast</button>
          </form>
    );
  }
}

export default AddRoast;