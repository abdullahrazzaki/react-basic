import { LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/authActions";
const initialState = { loggedIn: false, loading: true };
export const authReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      localStorage["token"] = action.payload.user;
      return { loggedIn: true, user: action.payload.user, loading: false };
    }
    case LOGIN_FAILED:
      delete localStorage["token"];
      return { ...state, loggedIn: false, loading: false };
    default:
      return state;
  }
};
