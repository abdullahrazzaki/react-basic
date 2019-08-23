import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { authReducer } from "./authReducer";
export const history = createBrowserHistory();

export default combineReducers({
  router: connectRouter(history),
  auth: authReducer
});
