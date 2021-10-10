import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../../Redux-Forms/Forms";
import style from "../../Redux-Forms/Forms.module.css";
import { login } from "../../Redux/auth-reducer";
import { alphaNumeric, minLength, required } from "../../Utilites/Validator/Validator";

const minLength6 = minLength(6);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField("email", "email", Input, alphaNumeric, required, {
				type: "email",
				label: "Enter your login",
			})}
			{createField("password", "password", Input, null, required, {
				type: "password",
				label: "Enter your password",
			})}
			{captchaUrl && <img src={captchaUrl} />}
			{captchaUrl && createField("Write capthca", "captcha", Input, null, required)}
			{error && <div className={style.validateError}>{error}</div>}
			<div>
				<Field type="checkbox" name="rememberMe" component="input" /> Remember me
			</div>

			<div className={style.buttonLogin}>
				<button>Sing In</button>
				<button>
					<a href="https://social-network.samuraijs.com/login?ReturnUrl=%2faccount" target="_blank">
						{" "}
						Sing Up
					</a>
				</button>
			</div>
		</form>
	);
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
	};

	if (props.isAuth) {
		return <Redirect to={"/profile"} />;
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
