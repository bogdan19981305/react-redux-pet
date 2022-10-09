import {combineReducers} from "redux";
import authActions from "./authActions";

const rootReducer = combineReducers({
    auth: authActions
});

export default rootReducer;