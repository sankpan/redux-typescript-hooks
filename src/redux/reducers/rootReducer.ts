import { combineReducers } from "redux";
import NameReducer from "./nameReducer";
import CountReducer from "./countReducer";

const rootReducer = combineReducers({
  name: NameReducer,
  count: CountReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
