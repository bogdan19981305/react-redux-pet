import NotFound from "../Pages/NotFound";
import publicRoutes from './public-routes';

const routes = [
        publicRoutes,
    { path: "*", element: <NotFound /> }
];

export default routes;