import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { login, loginWithGoogle } from "../../../services/user";
import { isEmailValid, isPasswordValid } from "../../../utilities/validate";
import FormInput from "../../../libraries/form-validation/components/FormInput";
import useFormValidation from "../../../libraries/form-validation/hooks/useFormValidation";
import { auth } from "../../../config/firebase";
import Alert from "../../Alert/Alert";

const Login = () => {
	const [alertData, setAlertData] = useState({
		isOpen: false,
		text: "",
		status: undefined,
	});

	const [formData, formRef, handleInputValue, isFormValid] =
		useFormValidation();
	const [showEmailForm, setShowEmailForm] = useState(false);

	const [user, loading, _error] = useAuthState(auth);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const result = await login(formData.email.value, formData.password.value);
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
			<h2 className="mt-3 text-center auth-header">Welcome back</h2>

			{showEmailForm ? (
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
							name="email"
							type="email"
							className="form-control"
							placeholder="Email"
							value={formData?.email?.value}
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
							value={formData?.password?.value}
							validation={isPasswordValid}
						/>
					</div>
					<div className="mb-3">
						<button
							className="btn btn-primary"
							type="submit"
							disabled={!isFormValid(formData)}
						>
							Sign In
						</button>
					</div>
					<Link
						className="text-decoration-none d-inline-block my-3"
						onClick={() => setShowEmailForm(false)}
					>
						<FaArrowLeft /> All sign in options
					</Link>
				</form>
			) : (
				<div className="auth-buttons">
					<div className="auth-button" onClick={() => setShowEmailForm(true)}>
						<IoIosMail size={20} />
						Sign in with email
						<div></div>
					</div>
					<div
						className="auth-button"
						onClick={async () => await loginWithGoogle()}
					>
						<FaGoogle />
						Sign in with Google
						<div></div>
					</div>
				</div>
			)}

			<div className="auth-help">
				<p className="auth-help__item">
					No account? <Link to="/register">Create one</Link>
				</p>
				<p className="auth-help__item">
					Trouble signing in? <Link to="/password-reset">Reset password</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
