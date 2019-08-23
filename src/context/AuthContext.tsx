import React, { useState } from "react";
import { authReducer } from "../reducers/authReducer";
import { login as loginAction, loginWithToken } from "../actions/authActions";
import useThunkReducer from "react-hook-thunk-reducer";
type AuthContextType = {
  data: any;
  login: (email: string, password: string, redirectTo?: string) => void;
};
const AuthContext = React.createContext<AuthContextType>({
  login: () => undefined,
  data: undefined
});

function AuthenticationProvider(props: any) {
  // code for pre-loading the user's information if we have their token in localStorage goes here

  // 🚨 this is the important bit.

  // Normally your provider components render the context provider with a value.

  // But we post-pone rendering any of the children until after we've determined

  // whether or not we have a user token and if we do, then we render a spinner

  // while we go retrieve that user's information.
  const hasToken = localStorage.getItem("token") != undefined;
  const [requestSent, setRequestSent] = useState(false);
  const [state, dispatch] = useThunkReducer(authReducer, {
    loggedIn: false,
    user: undefined,
    loading: hasToken
  });
  if (hasToken && !requestSent) {
    dispatch(loginWithToken(localStorage.getItem("token") || ""));
    setRequestSent(true);
  }

  if (state.loading) {
    return <div>Loading...</div>;
  }
  const login = (email: string, pw: string, from: any) => {
    dispatch(loginAction(email, pw, from));
  };
  const register = () => {}; // register the user

  const logout = () => {};
  return (
    <AuthContext.Provider
      value={{ data: state, login, logout, register, loggedIn: state.loggedIn }}
      {...props}
    />
  );
}
const AuthProvider = AuthenticationProvider;
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
