import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import Main from "../src/pages/Main"
import NotFound from "../src/pages/NotFound";


class Router extends React.Component {

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={Login} />
          <Route exact path="/signup" component={SignUp}/>
          <Route path="/main" component={Main}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
} 

export default Router;