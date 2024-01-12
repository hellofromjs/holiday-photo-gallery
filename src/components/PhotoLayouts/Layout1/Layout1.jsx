import Photo from "../../Photo/Photo";
import "./Layout1.scss";

export default function Layout1({ photoUrls }) {
	return (
		<div className="layout-1">
			{photoUrls[0] && (
				<Photo className="img-fluid layout-1__img" data={photoUrls[0]} />
			)}
			{photoUrls[1] && (
				<Photo className="img-fluid layout-1__img" data={photoUrls[1]} />
			)}
		</div>
	);
}
