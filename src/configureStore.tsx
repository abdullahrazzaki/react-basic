import { applyMiddleware, createStore } from "redux";
import rootReducer, { history as browserHistory } from "./reducers";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";

const configureStore = () =>
  createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logger, routerMiddleware(browserHistory))
  );
//store.subscribe(() => console.log("store state", store.getState()));

const store = configureStore();
export default store;
export const history = browserHistory;
