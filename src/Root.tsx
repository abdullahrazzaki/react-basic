import * as React from "react";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";

const Root: React.FC = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  );
};

export default Root;
