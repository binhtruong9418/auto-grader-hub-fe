import {FC, lazy} from 'react';
import {useRoutes} from 'react-router-dom';
import LayoutComponent from '../layouts';
import appRoute from "./appRoute.ts";

const NotFound = lazy(() => import('../pages/not-found'));

const routes = [
    {
        path: '/',
        element: <LayoutComponent/>,
        children: [
            ...Object.values(appRoute).map(({path, component: Component}) => (
                {
                    path,
                    element: <Component />,
                }
            )),
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    },
];

const RenderRouter: FC = () => {
    return useRoutes(routes);
};

export default RenderRouter;