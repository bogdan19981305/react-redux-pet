import NotFound from "../Pages/NotFound";
import publicRoutes from './public-routes';
import authRoutes from "./auth-routes";

const routes = [
        publicRoutes,
        authRoutes,
    { path: "*", element: <NotFound /> }
];

export default routes;