import constants from "../constants";

const initialState = [];


const notifyReducers = (state = initialState, {type,payload}) => {
    switch (type) {
        case constants.ADD_NEW_NOTIFICATION:
            return [...state,payload]
        case constants.REMOVE_NOTIFICATION:
            return state.filter(item => item.id !== payload)
        default:
            return state
    }
}

export default notifyReducers;