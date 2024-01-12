import Photo from "../../Photo/Photo";
import "./Layout0.scss";

export default function Layout0({ photoUrls }) {
	return (
		<div className="layout-0">
			{photoUrls[0] && (
				<Photo className="img-fluid layout-0__img" data={photoUrls[0]} />
			)}
		</div>
	);
}
