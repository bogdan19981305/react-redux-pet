import constants from '../constants';

const initialState = [{
    fullName:"Bogdan Lytvynenko",
    email:"litvinenkob16@gmail.com",
    password:"111111111Qq#"
}]


const userReducers = (state = initialState, {type,payload}) => {
    switch (type) {
        case constants.ADD_NEW_USER:
            return [...state,payload]
        default:
            return state
    }
}

export default userReducers;