import { createStore,applyMiddleware} from 'redux';
import rootReducer from "./reducers";
import { composeWithDevTools} from 'redux-devtools-extension';

const middleware = [];

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(...middleware)));

export default store;