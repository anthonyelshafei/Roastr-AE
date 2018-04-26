import React from "react";
import AddRoast from "../AddRoast";
import CompRoast from "../CompRoast/CompRoast";


class Feed extends React.Component {
 render() {
   return (
     <div id="feed" className="container-fluid">

       <h2>Roast</h2>
       <AddRoast/>
       <br/>
       <h2>Feed</h2>
       <CompRoast/>
       <CompRoast/>
       <CompRoast/>
       <CompRoast/>
       <CompRoast/>
       <CompRoast/>
       <br/>
     </div>
   )
 }
}

export default Feed;