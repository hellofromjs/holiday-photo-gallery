import Photo from "../../Photo/Photo";
import "./Layout6.scss";

export default function Layout6({ photoUrls }) {
	return (
		<div className="layout-6">
			<div className="layout-6__left">
				{photoUrls[0] && (
					<Photo className="img-fluid layout-6__img" data={photoUrls[0]} />
				)}
				{photoUrls[1] && (
					<Photo className="img-fluid layout-6__img" data={photoUrls[1]} />
				)}
			</div>
			{photoUrls[2] && (
				<Photo className="img-fluid layout-6__img" data={photoUrls[2]} />
			)}
		</div>
	);
}
