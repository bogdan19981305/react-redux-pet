import NotFound from "../Pages/NotFound";
import publicRoutes from './public-routes';
import authRoutes from "./auth-routes";
import privateRoutes from './private-routes';

const routes = [
        publicRoutes,
        authRoutes,
        privateRoutes,
    { path: "*", element: <NotFound /> }
];

export default routes;