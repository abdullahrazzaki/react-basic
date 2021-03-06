import { push } from "connected-react-router";

export const LOGIN_STARTED = "LOGIN_STARTED",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILED = "LOGIN_FAILED";
const loginFailed = () => {
  return { type: LOGIN_FAILED };
};
const loginSuccess = (user: any) => ({
  type: LOGIN_SUCCESS,
  payload: { user }
});
export function login(email: string, pw: string, redirectTo: string) {
  return (dispatch: any) => {
    dispatch({ type: LOGIN_STARTED });
    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: { email }, redirectTo }
      });
      console.log("Redirecting to ", redirectTo);
      if (redirectTo) dispatch(push(redirectTo));
    }, 3000);
  };
}
export function loginWithToken(token: string) {
  return (dispatch: any) => {
    dispatch({ type: LOGIN_STARTED });
    const r = -1; //+ Math.random();
    setTimeout(() => {
      if (r < 0.5) dispatch(loginSuccess({ email: "dummy@gmail.com", token }));
      else dispatch(loginFailed());
    }, 3000);
  };
}
