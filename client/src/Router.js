import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../src/pages/Main"
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import NotFound from "../src/pages/NotFound";
import API from "../src/utils/API";


class Router extends React.Component {

  state = {
    userCount: []
  }

  componentDidMount(){
    API.getUsers().then(res => {
    this.setState({userCount: res.data})
    })
  };


  render () {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Login}/> */}
          <Route exact path="/" render={() => <Login userCount={this.userCount} />} />
          <Route exact path="/signup" component={SignUp}/>
          <Route path="/main" component={Main}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
} 

export default Router;