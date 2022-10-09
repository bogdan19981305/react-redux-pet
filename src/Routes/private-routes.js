import Private from "../Layouts/Private";

const privateRoutes =  {
    element: <Private />,
    children: [
        {
            path: '/admin/view-site',
            element: <div>View Website</div>,
            index: true
        }
    ]
};

export default privateRoutes;
