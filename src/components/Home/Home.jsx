import AddPhotoModal from "../AddPhotoModal/AddPhotoModal";
import { useEffect, useState } from "react";
import { getAllPhotosSubscribed } from "../../services/photo";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import PhotoLayoutContainer from "../PhotoLayouts/PhotoLayoutContainer";
import LayoutSelection from "../LayoutSelection/LayoutSelection";

export default function Home() {
	const [selectedLayout, setSelectedLayout] = useState(7);
	const [works, setWorks] = useState([]);
	const [user, loading, _error] = useAuthState(auth);

	useEffect(() => {
		if (loading) return;

		if (user) {
			getAllPhotosSubscribed(setWorks);
		}
	}, [user, loading]);

	useEffect(() => {}, [selectedLayout]);

	return (
		<div className="container">
			<div className="py-3 d-flex gap-3">
				<AddPhotoModal />
				<LayoutSelection onSelect={setSelectedLayout} />
			</div>

			<PhotoLayoutContainer layoutIndex={selectedLayout} photos={works} />
		</div>
	);
}
