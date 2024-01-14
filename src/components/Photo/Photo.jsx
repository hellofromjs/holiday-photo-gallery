import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { deletePhoto } from "../../services/photo";
import FullScreenImage from "../FullScreenImage/FullScreenImage";
import "./Photo.scss";

export default function Photo({ className, data }) {
	const [isOpen, setIsOpen] = useState(false);

	async function handleDelete() {
		await deletePhoto(data.id);
	}

	return (
		<>
			<div className="photo-box">
				<img
					className={`${className}`}
					src={data.url}
					onClick={() => setIsOpen((oldValue) => !oldValue)}
				/>
				<div className="photo-box__delete" onClick={handleDelete}>
					<MdDeleteForever size={60} />
				</div>
			</div>

			<FullScreenImage isOpen={isOpen} setIsOpen={setIsOpen} url={data.url} />
		</>
	);
}
