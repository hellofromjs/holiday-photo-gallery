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
		<div className="container">
			<h2 className="mt-3 text-center">Atstatykite slaptazodi</h2>

			<form className="form" onSubmit={handleSubmit} ref={formRef}>
				<div className="mb-3">
					<FormInput
						onChange={handleInputValue}
						name="email"
						type="email"
						className="form-control"
						placeholder="Jusu emailas"
						errorMessage="Toks emailas nera leistinas"
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
						Siusti
					</button>
				</div>
			</form>
		</div>
	);
};

export default Reset;
