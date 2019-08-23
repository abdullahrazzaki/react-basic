import * as React from "react";
import App from "./App";
import { useUser, UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import store from "./configureStore";

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    </Provider>
  );
};

export default Root;
