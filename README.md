# Auto grader hub Frontend

## Overview
This is the frontend for the auto grader hub project. The frontend is built using React and Material-UI, Antd.
The frontend is responsible for rendering the UI for the auto grader hub project.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v18.19.0)

### Installation and Setup

1. Clone the repository
```bash
git clone https://github.com/binhtruong9418/auto-grader-hub-fe.git
```

2. Install dependencies
```bash
cd auto-grader-hub-fe
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Tech Stack:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Antd](https://ant.design/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://react-query.tanstack.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Zustand](https://zustand.surge.sh/)

## Template Structure:
- `src`: Contains the source code of the frontend
    - `apis`: Contains the API services and configurations
    - `components`: Contains the reusable components
    - `constants`: Contains the constant values and types
    - `hooks`: Contains the custom hooks
    - `layouts`: Contains the layout components
    - `pages`: Contains the page components. Each page is a route in the application
    - `providers`: Contains some providers such as ThemeProvider, QueryClientProvider, etc.
    - `routes`: Contains the route configurations
    - `themes`: Contains the theme configurations
    - `utils`: Contains the utility functions
    - `App.tsx`: The root component of the application
    - `index.tsx`: The entry point of the application
- `.env`: Contains the environment variables

## How to use:

### 1. Create a new page
To create a new page, you can create a new file in the `pages` folder. The file should be named in the format `PageName.tsx`. The content of the file should be like this:
```tsx
import React from 'react';

const PageName = () => {
    return (
        <div>
            PageName
        </div>
    );
};

export default PageName;
```

### 2. Export page
To export the lazy-loaded page, you can export the page in the `pages/index.tsx` file. The content of the file should be like this:
```tsx
export {default as HomePage} from "@/pages/home";
```

### 3. Add route for the page
To add a route for the page, you can add the route in the `routes` folder. Private routes should be added in the `privateRoutes.ts` file and public routes should be added in the `publicRoutes.ts` file. The content of the file should be like this:
```tsx
import { PageNamePage } from '@/pages';

export const appRoutes = [
    pathValue: {
        path: "/page-name",
        component: PageNamePage,
    },
];

export default appRoutes;
```

### NOTE:
If you want to add some new route with new layout, you can add new layout in the `layouts` folder with the format `LayoutName.tsx`. The content of file should be like this:
```tsx

import React from 'react';
import {Outlet} from 'react-router-dom';

const LayoutName = () => {
    return (
        <div>
            {/*This is the children of layout*/}
            <Outlet />
        </div>
    );
};

export default LayoutName;
```

Then you can add the route for the page with the new layout in the `routes/RenderRouter.ts` file. The content of the file should be like this:
```tsx

import { PageNamePage } from '../pages';
import { LayoutName } from '../layouts';

const routes = [
    {
        element: <LayoutName />,
        children: [
            ...Object.values(appRoute).filter((path) => path.path.startsWith("/global-path")).map(({path, component: Component}) => (
                {
                    path,
                    element: <Component />,
                }
            )),
        ]
   }
]

```

## NOTE:

- The variables in the `.env` file should be prefixed with `VITE_` to be accessible in the application.


Enjoy coding! 🚀
Created by Binh Truong - 15/10/2024

        