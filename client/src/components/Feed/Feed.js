import React from "react";
import AddRoast from "../AddRoast";
import CompRoast from "../CompRoast/CompRoast";


class Feed extends React.Component {
 render() {
   return (
     <div className="container-fluid">
       <h2>This is the feed</h2>
       <AddRoast/>
       <CompRoast/>
     </div>
   )
 }
}

export default Feed;