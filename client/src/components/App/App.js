import React from "react";
import Feed from "../Feed";
import Nav from "../Nav";
import User from "../User";
import Social from "../Social";

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
