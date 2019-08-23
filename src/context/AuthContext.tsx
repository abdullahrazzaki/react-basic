import React, { useState } from "react";
import { authReducer } from "../reducers/authReducer";
import { login as loginAction, loginWithToken } from "../actions/authActions";
import useThunkReducer from "react-hook-thunk-reducer";
type AuthContextType = {
  data: any;
  login: (email: string, password: string, onLogin?: () => void) => void;
};
const AuthContext = React.createContext<AuthContextType>({
  login: () => undefined,
  data: undefined
});

function AuthenticationProvider(props: any) {
  const hasToken = localStorage.getItem("token") !== undefined;
  const [requestSent, setRequestSent] = useState(false);
  const [state, dispatch] = useThunkReducer(authReducer, {
    loading: hasToken,
    loggedIn: false
  });
  const { loading, loggedIn } = state;
  if (hasToken && !requestSent) {
    dispatch(loginWithToken(localStorage.getItem("token") || ""));
    setRequestSent(true);
  }

  if (hasToken && loading) {
    return <div>Loading...</div>;
  }
  const login = (email: string, password: string, onLogin: () => void) => {
    dispatch(loginAction(email, password, onLogin));
  };
  const register = () => {};

  const logout = () => {};
  return (
    <AuthContext.Provider
      value={{ data: state, login, logout, register, loggedIn: loggedIn }}
      {...props}
    />
  );
}
const AuthProvider = AuthenticationProvider;
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
