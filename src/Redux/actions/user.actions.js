import constants from '../constants';

export const addNewUser = userDto => ({
    payload: userDto,
    type: constants.ADD_NEW_USER
});