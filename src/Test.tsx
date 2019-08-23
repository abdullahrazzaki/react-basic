import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
const App: React.FC = ({ match }: any) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to="/test">Go to test</Link>

        <Switch>
          <Route
            path={`${match.path}/tt`}
            test="Test prop"
            component={(props: any) => (
              <div>New Test {JSON.stringify(props.test)}</div>
            )}
          />
        </Switch>
      </header>
    </div>
  );
};

export default App;
