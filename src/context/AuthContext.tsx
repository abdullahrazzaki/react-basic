import React, { useState } from "react";
import { authReducer } from "../reducers/authReducer";
import { login as loginAction, loginWithToken } from "../actions/authActions";
import useThunkReducer from "react-hook-thunk-reducer";
import { connect } from "react-redux";
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
  const { login, loading, loggedIn, loginWithToken } = props;
  const hasToken = localStorage.getItem("token") != undefined;
  const [requestSent, setRequestSent] = useState(false);
  if (hasToken && !requestSent) {
    loginWithToken(localStorage.getItem("token") || "");
    setRequestSent(true);
  }

  if (hasToken && loading) {
    return <div>Loading...</div>;
  }
  const register = () => {}; // register the user

  const logout = () => {};
  return (
    <AuthContext.Provider
      value={{ data: props, login, logout, register, loggedIn: loggedIn }}
      {...props}
    />
  );
}
const mapStateToProps = (state: any) => {
  return { ...state.auth };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (email: string, pw: string, from: any) => {
      dispatch(loginAction(email, pw, from));
    },
    loginWithToken: (token: string) => {
      dispatch(loginWithToken(token));
    }
  };
};
const AuthProvider = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationProvider);
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
