import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as dotenv from "dotenv";
dotenv.config();
const reducers = (history: any) =>
  combineReducers({
    router: connectRouter(history),
  });
export default reducers;
