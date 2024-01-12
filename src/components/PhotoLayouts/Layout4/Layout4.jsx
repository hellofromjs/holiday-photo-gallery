import Photo from "../../Photo/Photo";
import "./Layout4.scss";

export default function Layout4({ photoUrls }) {
	return (
		<div className="layout-4">
			{photoUrls[0] && (
				<Photo className="img-fluid layout-4__img" data={photoUrls[0]} />
			)}
			{photoUrls[1] && (
				<Photo className="img-fluid layout-4__img" data={photoUrls[1]} />
			)}
		</div>
	);
}
