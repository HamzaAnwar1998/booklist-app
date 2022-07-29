import { combineReducers } from "redux";
import operationsReducer from "./reducers/operations";

const rootReducer = combineReducers({
    operationsReducer,
})

export default rootReducer;