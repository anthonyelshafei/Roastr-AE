import React from "react";
import AddRoast from "../AddRoast";
import CompRoast from "../CompRoast/CompRoast";

class Feed extends React.Component {
  render() {
    return (
      <div className="feed">
        <h2>Feed</h2>
        <AddRoast/>
        <CompRoast/>
      </div>
    )
  }
}

export default Feed;