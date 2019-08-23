import React from "react";
import "./App.css";
import { useUser } from "./context/UserContext";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { UnAuthenticatedApp } from "./UnAuthenticatedApp";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = (props: any) => {
  const user = useUser();
  const AppComponent = user ? AuthenticatedApp : UnAuthenticatedApp;
  return (
    <Router>
      <Route path="/" {...props} component={AppComponent} />
    </Router>
  );
};

export default App;
