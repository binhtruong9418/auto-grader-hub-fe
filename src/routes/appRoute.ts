import {HomePage} from "../pages"

const appRoute = {
    home: {
        path: '/',
        component: HomePage,
        requiredLogin: true,
    },
}

export default appRoute;