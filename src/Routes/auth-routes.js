import Auth from "Layouts/Auth";
import Register from "Pages/Auth/Register";
import SignIn from "Pages/Auth/SignIn";

const authRoutes =  {
    element: <Auth />,
    children: [
        {
            path: '/auth/sign-in',
            element: <SignIn />,
            index: true
        },
        {
            path: '/auth/register',
            element: <Register />,
            index: true
        }
    ]
};

export default authRoutes