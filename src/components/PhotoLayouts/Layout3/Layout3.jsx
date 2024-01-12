import Photo from "../../Photo/Photo";
import "./Layout3.scss";

export default function Layout3({ photoUrls }) {
	return (
		<div className="layout-3">
			{photoUrls[0] && (
				<Photo className="img-fluid layout-3__img" data={photoUrls[0]} />
			)}
		</div>
	);
}
