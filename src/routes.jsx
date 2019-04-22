import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup";
import dashboard from "./components/dashboard";
import Login from "./Login";
import AppliedRoute from './AppliedRoute';

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute exact path="/dashboard" component={dashboard} props={childProps} />
    <AppliedRoute exact path="/signup" component={Signup} props={childProps}/>
    <AppliedRoute exact path="/login" component={Login} props={childProps} />
  </Switch>
;

