import { useRef } from "react";
import { FaPlusCircle } from "react-icons/fa";
import * as bootstrap from "bootstrap/dist/js/bootstrap";
import { addPhoto } from "../../services/photo";
import useFormValidation from "../../libraries/form-validation/hooks/useFormValidation";
import FormInput from "../../libraries/form-validation/components/FormInput";

const { Modal } = bootstrap;

export default function AddPhotoModal() {
	const [formData, formRef, handleInputValue, isFormValid] =
		useFormValidation();

	const modalRef = useRef();

	const showModal = () => {
		const modalEle = modalRef.current;
		const bsModal = new Modal(modalEle, {
			backdrop: "static",
			keyboard: false,
		});
		bsModal.show();
	};

	const hideModal = () => {
		const modalEle = modalRef.current;
		const bsModal = bootstrap.Modal.getInstance(modalEle);
		bsModal.hide();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await addPhoto(formData.url.value);
		hideModal();
	};

	return (
		<div>
			<button
				type="button"
				className="btn btn-primary d-flex align-items-center gap-2"
				onClick={showModal}
			>
				<FaPlusCircle size={20} />
				Add Photo
			</button>
			<div className="modal fade" ref={modalRef} tabIndex="-1">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="staticBackdropLabel">
								Add Photo
							</h5>
							<button
								type="button"
								className="btn-close"
								onClick={hideModal}
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<form onSubmit={handleSubmit} ref={formRef}>
								<div className="mb-3">
									<FormInput
										onChange={handleInputValue}
										name="url"
										type="text"
										className="form-control"
										placeholder="Photo URL"
										errorMessage="URL must start with http"
										label="Photo URL:"
										value={formData?.url.value}
										validation={(value) => {
											if (value.startsWith("http")) {
												return true;
											} else {
												return false;
											}
										}}
									/>
								</div>
								<button
									style={{ marginLeft: "auto", display: "block" }}
									role="button"
									type="submit"
									className="btn btn-primary"
									disabled={!isFormValid(formData)}
								>
									Add
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
