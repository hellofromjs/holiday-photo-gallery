import Photo from "../../Photo/Photo";
import "./Layout5.scss";

export default function Layout5({ photoUrls }) {
	return (
		<div className="layout-5">
			{photoUrls[0] && (
				<Photo className="img-fluid layout-5__img-circle" data={photoUrls[0]} />
			)}
			{photoUrls[1] && (
				<Photo className="img-fluid layout-5__img-square" data={photoUrls[1]} />
			)}
			{photoUrls[2] && (
				<Photo className="img-fluid layout-5__img-square" data={photoUrls[2]} />
			)}
			{photoUrls[3] && (
				<Photo className="img-fluid layout-5__img-circle" data={photoUrls[3]} />
			)}
		</div>
	);
}
