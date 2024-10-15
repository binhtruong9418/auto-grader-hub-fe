import { lazy } from 'react';

const HomePage = lazy(() => import('./home'));
const LoginPage = lazy(() => import('./auth/Login'));
const RegisterPage = lazy(() => import('./auth/Register'));
const ForgotPasswordPage = lazy(() => import('./auth/ForgotPassword'));



export { HomePage , ForgotPasswordPage, LoginPage, RegisterPage };