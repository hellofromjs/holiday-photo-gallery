import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AddPhotoModal from "../AddPhotoModal/AddPhotoModal";
import { getAllUserPhotosLive } from "../../services/photo";
import { auth } from "../../config/firebase";
import PhotoLayoutContainer from "../PhotoLayouts/PhotoLayoutContainer";
import LayoutSelection from "../LayoutSelection/LayoutSelection";

export default function Home() {
	const [selectedLayout, setSelectedLayout] = useState(7);
	const [photos, setPhotos] = useState([]);
	const [user, loading, _error] = useAuthState(auth);

	useEffect(() => {
		if (loading) return;

		if (user) {
			getAllUserPhotosLive(setPhotos);
		}
	}, [user, loading]);

	useEffect(() => {}, [selectedLayout]);

	return (
		<div className="container">
			<div className="py-3 d-flex gap-3">
				<AddPhotoModal />
				<LayoutSelection onSelect={setSelectedLayout} />
			</div>
			<PhotoLayoutContainer layoutIndex={selectedLayout} photos={photos} />
		</div>
	);
}
