import Auth from "Layouts/Auth";
import Register from "Pages/Auth/Register";

const authRoutes =  {
    path: "/auth",
    element: <Auth />,
    children: [
        {
            path: '/auth/sign-in',
            element: <div>sign in</div>,
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