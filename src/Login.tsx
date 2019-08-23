import React from "react";
import { useAuth } from "./context/AuthContext";
export const Login = (props: any) => {
  const { login } = useAuth();
  const {
    location: {
      state: { from }
    },
    history
  } = props;
  console.log("From: ", from, props);
  return (
    <div>
      <div>Not logged in</div>

      <button
        onClick={() => {
          login("test@gmail.com", "testpass", () =>
            history.push(from.pathname)
          );
        }}
      >
        login
      </button>
    </div>
  );
};
