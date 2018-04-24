import React from "react";
import AddRoast from "../AddRoast";
import EditRoast from "../EditRoast";

class Social extends React.Component {
  render() {
    return (
      <div className="social">
        <h2>Feed</h2>
        <EditRoast/>
        <AddRoast/>
      </div>
    )
  }
}

export default Social;