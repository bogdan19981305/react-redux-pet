import messages from "Messages";
import store from "Redux/index";
import {authActions} from "../../Redux/actions";

export const signIn = ({data = {},users = []}) => new Promise( (resolve,reject) => {

    const idx = users.findIndex(user => user.email === data.email);

    if(idx === -1) {
        return reject(messages.auth.not_found)
    }

    if(data.password !== users[idx]?.password) {
        return reject(messages.auth.invalid_pass)
    }

    store.dispatch(authActions.logIn(users[idx]));

    return resolve(messages.auth.logged_in);
})