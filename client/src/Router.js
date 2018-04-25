import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../src/pages/Main"
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import App from "./components/App";
import NotFound from "../src/pages/NotFound";
import TestPage from "../src/pages/TestPage";
import RoasterDropdown from "./components/RoasterDropdown/RoasterDropdown";

const Router = () => (
  
  <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/test" component={TestPage}/>
          <Route exact path="/test" component={RoasterDropdown}/>
          <Route path="/user/:username" component={App}/>
          <Route path="/app" component={App}/>
          <Route component={NotFound}/>
        </Switch>
  </BrowserRouter>
);

export default Router;