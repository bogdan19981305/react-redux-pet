import routes from "./Routes";
import {useRoutes} from "react-router-dom";
import 'Assets/Styles/vars.css';
import './styles.css';
import 'Assets/Styles/reset.css';
import 'Assets/Styles/utility.css';
import 'Assets/Styles/typography.css';
import { Provider } from 'react-redux'
import store from "Redux/index";

const App = () => (
    <Provider store={store}>
        {useRoutes(routes)}
    </Provider>
)

export default App;
