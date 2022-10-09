import store from "Redux/index";
import {notifyActions} from "Redux/actions";

 const Notify = {
    error: text => store.dispatch(notifyActions.addNewNotification({text,color: 'error'})),
    success: text => store.dispatch(notifyActions.addNewNotification({text,color: 'success'})),
    info: text => store.dispatch(notifyActions.addNewNotification({text}))
};

 export default Notify;