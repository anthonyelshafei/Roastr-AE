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
        <div className="row">
          <div className="col-md-2">
            <User />
          </div>

          <div className="col-md-7">
            <Feed />
          </div>

          <div className="col-md-3">
            <Social />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
