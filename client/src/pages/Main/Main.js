import React from "react";
import Feed from "../../components/Feed";
import Nav from "../../components/Nav";
import User from "../../components/User";
import Social from "../../components/Social";
import { Route } from "react-router-dom";
import Worst from "../../components/Worst";
import Best from "../../components/Best";


class Main extends React.Component {

  state = {
    center: "feed"
  }

  render() {
    return (
      <div>

        <Nav />
        <div className="row">
          <div className="col-md-2">
            <User />
          </div>

          <div className="col-md-7 p-3">
       <Route exact path={`${this.props.match.url}`} component={Feed}/>   
       <Route exact path={`${this.props.match.url}/Worst`} component={Worst}/>
       <Route exact path={`${this.props.match.url}/Best`} component={Best}/>
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
