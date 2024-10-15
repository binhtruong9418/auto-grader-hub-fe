import {ForgotPasswordPage, HomePage, LoginPage, RegisterPage} from "../pages"

const appRoute = {
    home: {
        path: '/',
        component: HomePage,
        requiredLogin: true,
    },
    login: {
        path: '/auth/login',
        component: LoginPage,
        requiredLogin: false,
    },
    forgotPassword: {
        path: '/auth/forgot-password',
        component: ForgotPasswordPage,
        requiredLogin: false,
    },
    register: {
        path: '/auth/register',
        component: RegisterPage,
        requiredLogin: false,
    }
}

export default appRoute;