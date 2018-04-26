import React from "react";
import AddRoast from "../AddRoast";
import CompRoast from "../CompRoast/CompRoast";


class Feed extends React.Component {
 render() {
   return (
     <div className="container-fluid pt-4">
       <h2>Roast</h2>
       <AddRoast/>
       <br/>
       <h2>Feed</h2>
       <CompRoast/>
     </div>
   )
 }
}

export default Feed;