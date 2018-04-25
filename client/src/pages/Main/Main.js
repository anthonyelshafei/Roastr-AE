import React from "react";
import Feed from "../../components/Feed";
import Nav from "../../components/Nav";
import User from "../../components/User";
import Social from "../../components/Social";

class Main extends React.Component {

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

export default Main;
