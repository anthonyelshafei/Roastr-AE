import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../src/pages/Main"
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import App from "./components/App";
import NotFound from "../src/pages/NotFound";

const Router = () => (
  
  <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route path="/user/:username" component={App}/>
          <Route path="/app" component={App}/>
          <Route component={NotFound}/>
        </Switch>
  </BrowserRouter>
);

export default Router;