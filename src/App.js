import routes from "./Routes";
import {useRoutes} from "react-router-dom";
import 'Assets/Styles/vars.css';
import './styles.css';
import {Notification} from "Components";
import 'Assets/Styles/reset.css';
import 'Assets/Styles/utility.css';
import 'Assets/Styles/typography.css';
import { useSelector} from 'react-redux'

const App = () => {

    const notifications = useSelector(({notifications}) => notifications);

    return (
        <>
            {useRoutes(routes)}
            {notifications.map(({ id, color,text }) => (
                <Notification id={id} key={id} color={color}>
                    {text}
                </Notification>
            ))}
        </>
        )
}

export default App;
