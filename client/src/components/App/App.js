import React from "react";
import Feed from "../Feed";

class App extends React.Component {
 render() {
   return (
     <div>
       <Nav />
       <User />
       <Feed />
       <Social />
     </div>
   )
 }
}

export default App;