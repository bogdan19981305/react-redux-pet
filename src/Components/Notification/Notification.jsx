import React, { useEffect} from "react";
import {Icon} from "Components";
import styles from "./Notification.module.css";
import createContainer from "./crreateContainer";
import {createPortal} from "react-dom";
import {useDispatch} from "react-redux";
import {notifyActions} from "Redux/actions";

const notificationColorStrategy = {
    success: styles['notification__color-success'],
    error: styles['notification__color-error'],
    info: styles['notification__color-info']
}

const  Notification = ({ color = 'info',id, children }) => {
    const dispatch = useDispatch();
    const container = createContainer();

    const removeNotification = () => dispatch(notifyActions.removeNotification(id));


    useEffect(() => {
        setTimeout(removeNotification,2000);
        // eslint-disable-next-line
    },[]);



    return createPortal(
        <div
            className={`
                ${styles.notification}
                ${notificationColorStrategy[color]}
            `}
        >
            {children}
            <button onClick={() => dispatch(notifyActions.removeNotification(id))} className={styles.closeButton}>
                <Icon icon='close' />
            </button>
        </div>,
        container
    );
}

export default Notification;