import Home from "../Pages/Home";
import Public from "../Layouts/Public";

const publicRoutes =  {
    path: "/",
    element: <Public />,
    children: [
        {
            path: '/',
            element: <Home />
        }
    ]
};

export default publicRoutes