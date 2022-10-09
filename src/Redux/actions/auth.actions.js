import constants from '../constants';

export const logIn = userDto => ({
    payload: userDto,
    type: constants.LOG_IN
});

export const SignOut = () => ({
    type: constants.SIGN_OUT
})