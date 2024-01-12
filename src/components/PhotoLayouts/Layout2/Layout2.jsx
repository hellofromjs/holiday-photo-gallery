import Photo from "../../Photo/Photo";
import "./Layout2.scss";

export default function Layout2({ photoUrls }) {
	return (
		<div className="layout-2">
			{photoUrls[0] && (
				<Photo className="img-fluid layout-2__box" data={photoUrls[0]} />
			)}
			{photoUrls[1] && (
				<Photo className="img-fluid layout-2__box" data={photoUrls[1]} />
			)}
			{photoUrls[2] && (
				<Photo className="img-fluid layout-2__box" data={photoUrls[2]} />
			)}
			{photoUrls[3] && (
				<Photo className="img-fluid layout-2__box" data={photoUrls[3]} />
			)}
		</div>
	);
}
