import React from "react";
import AddRoast from "../AddRoast";
import API from "../../utils/API";
import CompRoast from "../CompRoast/CompRoast";
// import { userInfo } from "os";
 
 
 class Feed extends React.Component {

  state = {
    completeRoasts: [],
    pendings: []
  }


  componentDidMount(){
    API.getRoasts().then(res => {
      this.setState({completeRoasts: res.data})
    })
  }
  
  updatePendings = () => {
    this.props.updatePendings()
  } 


  render() {
    return (
      <div id="feed" className="container-fluid">
      <h2>Roast</h2>
        <AddRoast
        updatePendings={this.updatePendings}
        />
        <br/>
        <br/>
        <h2>Feed</h2>
      {this.state.completeRoasts
        .sort((a, b) => a._id < b._id).map(item => (
        <CompRoast
        id={item._id}
        roastrName={item.roastrName}
        recipientName={item.recipientName}
        roastrImage={item.roastrImage}
        recipientImage={item.recipientImage}
        roast={item.roast}
        reply={item.reply}
        username={this.props.userInfo.username}
       />
      ))}
        <br/>
      </div>
    )
  }
 }
 
 export default Feed;