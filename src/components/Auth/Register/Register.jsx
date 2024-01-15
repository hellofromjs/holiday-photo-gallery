import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";
import FormInput from "../../../libraries/form-validation/components/FormInput";
import { register } from "../../../services/user";
import useFormValidation from "../../../libraries/form-validation/hooks/useFormValidation";
import {
	isEmailValid,
	isNameValid,
	isPasswordValid,
} from "../../../utilities/validate";
import Alert from "../../Alert/Alert";

const Register = () => {
	const [alertData, setAlertData] = useState({
		isOpen: false,
		text: "",
		status: undefined,
	});

	const [formData, formRef, handleInputValue, isFormValid] =
		useFormValidation();

	const [user, loading, _error] = useAuthState(auth);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const result = await register(
			formData.name.value,
			formData.email.value,
			formData.password.value
		);

		if (result?.error) {
			setAlertData({
				isOpen: true,
				text: result.error.message,
				status: "danger",
			});
		}
	};

	useEffect(() => {
		if (loading) return;
		if (user) navigate("/home");
	}, [user, loading]);

	return (
		<div className="auth-border">
			<h2 className="mt-3 text-center auth-header">Join Us</h2>

			<form
				className="form auth-email-form"
				onSubmit={handleSubmit}
				ref={formRef}
			>
				{alertData.isOpen && (
					<Alert text={alertData.text} status={alertData.status} />
				)}

				<div className="mb-3">
					<FormInput
						onChange={handleInputValue}
						name="name"
						type="text"
						className="form-control"
						placeholder="Name"
						value={formData?.name.value}
						validation={isNameValid}
					/>
				</div>
				<div className="mb-3">
					<FormInput
						onChange={handleInputValue}
						name="email"
						type="email"
						className="form-control"
						placeholder="Email"
						value={formData?.email.value}
						validation={isEmailValid}
					/>
				</div>
				<div className="mb-3">
					<FormInput
						onChange={handleInputValue}
						name="password"
						type="password"
						className="form-control"
						placeholder="Password"
						value={formData?.password.value}
						validation={isPasswordValid}
					/>
				</div>
				<div className="mb-3">
					<button
						className="btn btn-primary"
						type="submit"
						disabled={!isFormValid(formData)}
					>
						Sign Up
					</button>
				</div>
			</form>

			<div className="auth-help">
				<p className="auth-help__item">
					Have an account? <Link to="/">Sign in</Link>
				</p>
				<p className="auth-help__item">
					Trouble signing in? <Link to="/password-reset">Reset password</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
