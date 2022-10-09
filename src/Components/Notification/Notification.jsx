import React, { useEffect,useState} from "react";
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

    const [isClosing, setIsClosing] = useState(false);

    const dispatch = useDispatch();
    const container = createContainer();

    const removeNotification = () => dispatch(notifyActions.removeNotification(id));

    useEffect(() => {
        const initialTimeOut = setTimeout(() => setIsClosing(true),3000);
        if (isClosing) {
            clearTimeout(initialTimeOut);
            const removeTimeOut = setTimeout(removeNotification,300);

            return () => clearTimeout(removeTimeOut);
        }
        // eslint-disable-next-line
    },[isClosing]);


    return createPortal(
        <div
            className={`
                ${styles['notificationContainer']}
                ${isClosing ? styles.shrink : ''}
            `}
        >
            <div
                className={`
                ${styles.notification}
                ${notificationColorStrategy[color]}
                ${!isClosing ? styles.slideIn : styles.slideOut}
            `}
            >
                {children}
                <button
                    onClick={() => setIsClosing(true)}
                    className={styles.closeButton}
                >
                    <Icon icon='close' />
                </button>
            </div>
        </div>
        ,
        container
    );
}

export default Notification;