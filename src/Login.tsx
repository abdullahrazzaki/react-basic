import React, { useCallback } from "react";
import { useAuth } from "./context/AuthContext";
export const Login = (props: any) => {
  const { login } = useAuth();
  const {
    location: {
      state: { from }
    },
    history
  } = props;
  const onLogin = useCallback(() => {
    login("test@gmail.com", "testpass", () => history.push(from.pathname));
  }, [from, login, history]);
  return (
    <div>
      <div>Not logged in</div>

      <button onClick={onLogin}>login</button>
    </div>
  );
};
