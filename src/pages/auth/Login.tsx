import "./auth.css";
import {Button, Form, Image, Input} from "antd";
import Logo from '../../assets/react.svg'
import {useTranslation} from "react-i18next";
import {Link, useNavigate} from "react-router-dom";
import {isEmail} from "../../utils";
import {JWT_LOCAL_STORAGE_KEY} from "../../data/constants";
import toast from "react-hot-toast";
import {useLocalStorage} from "../../hooks";

const Login = () => {
    const [form] = Form.useForm();
    const {t} = useTranslation()
    const navigate = useNavigate()
    const {set: setJwtToken} = useLocalStorage(JWT_LOCAL_STORAGE_KEY, '');
    const handleLogin = async (values: {email: string, password: string}) => {
        const {email} = values
        // add your code here
        if(!isEmail(email)) {
            form.setFields([
                {
                    name: 'email',
                    errors: [t('The input is not valid E-mail!')],
                }
            ])
        }

        setJwtToken('test-token')
        toast.success(t('Login successfully!'))

        navigate('/')
    }
    return (
        <main className="auth-page">
            <div className="auth-card">
                <div className="auth-card-header">
                    <div>
                        <Image width={200} src={Logo} preview={false}/>
                    </div>
                    <div className="auth-title">{t('Welcome')}</div>
                    <p className="auth-description">{t("Login with your account to continue!")}</p>
                </div>
                <Form
                    form={form}
                    name="login"
                    layout="vertical"
                    onFinish={handleLogin}
                >
                    <Form.Item
                        style={{
                            marginBottom: "2.5rem",
                        }}
                        label={<span className="text-base font-medium">{t("Email")}</span>}
                        name="email"
                        rules={[
                            {required: true, message: t("Please input your email!")},
                        ]}
                    >
                        <Input placeholder={t("Email")} className="auth-form-input border-black"/>
                    </Form.Item>

                    <Form.Item
                        label={<span className="text-base font-medium">{t("Password")}</span>}
                        name="password"
                        rules={[
                            {required: true, message: t("Please input your password!")},
                        ]}
                    >
                        <Input.Password
                            placeholder={t("Password")}
                            className="auth-form-input border-black"
                        />
                    </Form.Item>
                </Form>
                <Link to={'/auth/forgot-password'} className={'text-sm'}>
                    Forgot password?
                </Link>
                <Button
                    type="primary"
                    onClick={form.submit}
                    className="auth-btn bg-black mt-3"
                    size="large"
                >
                    {t("Login")}
                </Button>
                <div className={'mt-3 text-center'}>
                    <span className={'text-sm'}>{t("Don't have an account?")}</span>
                    <Link to={'/auth/register'} className={'text-blue-500 text-sm'}>
                        {t(" Register")}
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Login;