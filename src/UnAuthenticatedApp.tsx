import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { Login } from "./Login";

export const UnAuthenticatedApp = (props: any) => {
  console.log("Props l: ", props);
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    </Switch>
  );
};
