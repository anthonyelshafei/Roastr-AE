import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../src/pages/Main"
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import NotFound from "../src/pages/NotFound";
import Worst from "./components/Worst";
import Best from "./components/Best";
import Feed from "./components/Feed";

const Router = () => (
  
  <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route path="/main" component={Main}/>
          {/* <Switch>
          <Route exact path="/main/Worst" component={Main}/>
          <Route exact path="/main/Best" component={Main}/>
          </Switch> */}
          <Route component={NotFound}/>
        </Switch>
  </BrowserRouter>
);

export default Router;