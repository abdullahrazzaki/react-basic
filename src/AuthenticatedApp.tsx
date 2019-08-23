import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Test from "./Test";
import { Layout } from "antd";
import Header from "./components/Header";

export const AuthenticatedApp = () => {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>
        <Switch>
          <Route path="/test" component={() => <div>Test</div>} />
          <Route exact path="/" component={Test} />
          <Redirect to="/" />
        </Switch>
      </Layout.Content>
    </Layout>
  );
};
