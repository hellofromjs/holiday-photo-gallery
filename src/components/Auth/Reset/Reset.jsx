import { Link } from "react-router-dom";
import { resetPassword } from "../../../services/user";
import useFormValidation from "../../../libraries/form-validation/hooks/useFormValidation";
import FormInput from "../../../libraries/form-validation/components/FormInput";
import { isEmailValid } from "../../../utilities/validate";

const Reset = () => {
	const [formData, formRef, handleInputValue, isFormValid] =
		useFormValidation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await resetPassword(formData.email.value);
	};

	return (
		<div className="auth-border">
			<h2 className="mt-3 text-center auth-header">Password Reset</h2>

			<form
				className="form auth-email-form"
				onSubmit={handleSubmit}
				ref={formRef}
			>
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
					<button
						className="btn btn-primary"
						type="submit"
						disabled={!isFormValid(formData)}
					>
						Send
					</button>
				</div>
			</form>

			<div className="auth-help">
				<p className="auth-help__item">
					No account? <Link to="/register">Create one</Link>
				</p>
				<p className="auth-help__item">
					Have an account? <Link to="/">Sign in</Link>
				</p>
			</div>
		</div>
	);
};

export default Reset;
