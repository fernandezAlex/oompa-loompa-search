import { combineReducers } from "redux";
import oompaLoompaReducer from "./oompaLoompaReducer";
import oompaLoompaDetailsReducer from "./oompaLoompaDetailsReducer";

const rootReducer = combineReducers({
  oompaLoompa: oompaLoompaReducer,
  oompaLoompaDetails: oompaLoompaDetailsReducer,
});

export default rootReducer;
