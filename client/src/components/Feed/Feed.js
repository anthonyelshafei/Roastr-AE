import React from "react";
import AddRoast from "../AddRoast";
import API from "../../utils/API";
import CompRoast from "../CompRoast/CompRoast";
 
 
 class Feed extends React.Component {

  state = {
    completeRoasts: []
  }

  componentDidMount(){
    API.getRoasts().then(res => {
      this.setState({completeRoasts: res.data})
    })
  }

  render() {
    return (
      <div id="feed" className="container-fluid">
      <h2>Roast</h2>
        <AddRoast/>
        <br/>
        <br/>
        <h2>Feed</h2>
      {this.state.completeRoasts.map(item => (
        <CompRoast
        roastrName={item.roastrName}
        recipientName={item.recipientName}
        roastrImage={item.roastrImage}
        recipientImage={item.recipientImage}
        roast={item.roast}
         reply={item.reply}
       />
      ))}
        <br/>
      </div>
    )
  }
 }
 
 export default Feed;