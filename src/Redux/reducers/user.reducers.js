import constants from '../constants';

const initialState = []


const userReducers = (state = initialState, {type,payload}) => {
    switch (type) {
        case constants.ADD_NEW_USER:
            return [...state,payload]
        default:
            return state
    }
}

export default userReducers;