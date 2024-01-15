import { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap/dist/js/bootstrap";

const { Modal } = bootstrap;

export default function FullScreenImage({ isOpen, setIsOpen, url }) {
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
		bsModal?.hide();
		setIsOpen(false);
	};

	useEffect(() => {
		if (isOpen) {
			showModal();
		}
	}, [isOpen]);

	return (
		<div className="modal fade" ref={modalRef} tabIndex="-1">
			<div className="modal-dialog modal-fullscreen">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Photo</h5>
						<button
							type="button"
							className="btn-close"
							onClick={hideModal}
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body bg-black">
						<img
							style={{
								maxWidth: "100%",
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
							src={url}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
