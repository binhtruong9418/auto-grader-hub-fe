import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import RenderRouter from './RenderRouter.tsx';

const Routes = () => {
    return (
        <Suspense fallback="loading...">
            <BrowserRouter>
                <RenderRouter />
            </BrowserRouter>
        </Suspense>
    );
};

export default Routes;