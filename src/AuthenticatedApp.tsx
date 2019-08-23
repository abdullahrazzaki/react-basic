import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Test from "./Test";

export const AuthenticatedApp = () => {
  return (
    <Switch>
      <Route path="/test" component={() => <div>Test</div>} />
      <Route exact path="/" component={Test} />
      <Route path="/t" component={Test} />

      <Redirect to="/" />
    </Switch>
  );
};
