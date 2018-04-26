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
        <div className="row p-3">
        
          <div className="col-10 col-xs-8 col-sm-8 offset-sm-2 col-md-3 col-lg-2 mx-auto">
            <User />
          </div>

          <div className="col-sm-12 col-md-9 col-lg-7">
            <Route exact path={`${this.props.match.url}`} component={Feed}/>   
            <Route exact path={`${this.props.match.url}/Worst`} component={Worst}/>
            <Route exact path={`${this.props.match.url}/Best`} component={Best}/>
          </div>

          <div className="col-sm-12 col-md-9 offset-md-3 col-lg-3 offset-lg-0">
            <Social />
          </div>

        </div>
      </div>
    )
  }
}

export default Main;
