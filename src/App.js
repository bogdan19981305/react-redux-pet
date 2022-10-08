import routes from "./Routes";
import {useRoutes} from "react-router-dom";
import './styles.css';
import 'Assets/Styles/reset.css';
import 'Assets/Styles/vars.css';
import 'Assets/Styles/utility.css';
import 'Assets/Styles/typography.css';

const App = () => useRoutes(routes);

export default App;
