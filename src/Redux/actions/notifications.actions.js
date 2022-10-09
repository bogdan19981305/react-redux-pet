import constants from '../constants';

export const addNewNotification = notificationDto => ({
    payload: {
        ...notificationDto,
        id: Math.round(Math.random() * 1000000000)
    },
    type: constants.ADD_NEW_NOTIFICATION
});

export const removeNotification = id => ({
    payload: id,
    type: constants.REMOVE_NOTIFICATION
})