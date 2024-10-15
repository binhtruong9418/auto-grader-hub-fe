import {FC, lazy} from 'react';
import {useRoutes} from 'react-router-dom';
import {MainLayout, AuthLayout} from '../layouts';
import appRoute from "./appRoute.ts";

const NotFound = lazy(() => import('../pages/not-found'));

const routes = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            ...Object.values(appRoute).filter((path) => path.requiredLogin).map(({path, component: Component}) => (
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
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            ...Object.values(appRoute).filter((path) => path.path.startsWith("/auth")).map(({path, component: Component}) => (
                {
                    path,
                    element: <Component />,
                }
            )),
        ]
    }
];

const RenderRouter: FC = () => {
    return useRoutes(routes);
};

export default RenderRouter;