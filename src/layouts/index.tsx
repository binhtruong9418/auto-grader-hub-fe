import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import HeaderComponent from './header/HeaderComponent.tsx';
import fallbackRender from "./error-boundary/fallbackRender.tsx";

const LayoutComponent = () => {
    return (
        <div className="w-full h-full">
            <HeaderComponent />
            <div className="px-4 py-20 flex flex-col">
                <ErrorBoundary fallbackRender={fallbackRender}>
                    <Suspense
                        fallback={
                            <div className="w-full h-full flex justify-center items-center">
                                <span>Loading...</span>
                            </div>
                        }
                    >
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </div>
    );
};

export default LayoutComponent;