import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { Login } from "./Login";
import { connect } from "react-redux";

const UnAuthenticatedAppComponent = (props: any) => {
  console.log("Props: ", props);
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    </Switch>
  );
};
const mapStateToProps = (state: any) => {
  const { location } = state.router;
  return { location };
};
export const UnAuthenticatedApp = connect(mapStateToProps)(
  UnAuthenticatedAppComponent
);
