import {combineReducers} from "redux";
import authReducers from "./auth.reducers";
import userReducers from "./user.reducers";
import notifyReducers from "./notifications.reducers";

const rootReducer = combineReducers({
    auth: authReducers,
    users: userReducers,
    notifications: notifyReducers
});

export default rootReducer;