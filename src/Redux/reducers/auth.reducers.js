import constants from "../constants";

const initialState = {
    currentUser: null,
}


const authReducers = (state = initialState, {type,payload}) => {
    switch (type) {
        case constants.LOG_IN:
            return {currentUser: payload}
        case constants.SIGN_OUT:
            return {currentUser: null}
        default:
            return state
    }
}

export default authReducers;