import { combineReducers } from "redux";
import operationsReducer from "./books/reducers/operations";

const rootReducer = combineReducers({
    operationsReducer,
})

export default rootReducer;