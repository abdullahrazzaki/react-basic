import React from "react";
import "./App.css";
import { history } from "./configureStore";
import { ConnectedRouter } from "connected-react-router";
import { useUser } from "./context/UserContext";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { UnAuthenticatedApp } from "./UnAuthenticatedApp";
import { Route } from "react-router-dom";

const App: React.FC = (props: any) => {
  const user = useUser();
  const AppComponent = user ? AuthenticatedApp : UnAuthenticatedApp;
  return (
    <ConnectedRouter history={history}>
      <Route path="/" {...props} component={AppComponent} />
    </ConnectedRouter>
  );
};

export default App;
