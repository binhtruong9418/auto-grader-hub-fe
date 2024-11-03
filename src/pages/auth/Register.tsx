import "./index.css";
import {Button, Form, Input, Image} from "antd";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Register = () => {
	const [form] = Form.useForm();
	const {t} = useTranslation()
	const handleRegister = async (values: {email: string, password: string}) => {
		console.log(values)
		// add your code here
	}
	return (
		<main className="auth-page">
			<div className="auth-card">
				<div className="auth-card-header">
					<div className={'flex justify-center'}>
						<Image
							width={150}
							src={'/logo.jpg'}
							preview={false}
							className={'rounded-full'}
						/>
					</div>
					<div className="auth-title">{t('Welcome')}</div>
					<p className="auth-description">{t("Register new account")}</p>
				</div>
				<Form
					form={form}
					name="register"
					layout="vertical"
					onFinish={handleRegister}
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
						style={{
							marginBottom: "2.5rem",
						}}
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
					
					<Form.Item
						label={<span className="text-base font-medium">{t("Confirm Password")}</span>}
						name="confirmPassword"
						rules={[
							{required: true, message: t("Please input your password!")},
						]}
					>
						<Input.Password
							placeholder={t("Confirm password")}
							className="auth-form-input border-black"
						/>
					</Form.Item>
				</Form>
				
				<Button
					type="primary"
					onClick={form.submit}
					className="auth-btn bg-black mt-3"
					size="large"
				>
					{t("Register")}
				</Button>
				<div className={'mt-3 text-center'}>
					<span className={'text-sm'}>{t("Already have an account?")}</span>
					<Link to={'/login'} className={'text-blue-500 text-sm'}>
						{t(" Login")}
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Register;