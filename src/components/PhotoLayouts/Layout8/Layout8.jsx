import Photo from "../../Photo/Photo";
import "./Layout8.scss";

export default function Layout8({ photoUrls }) {
	return (
		<div className="layout-8">
			{photoUrls[0] && (
				<Photo className="img-fluid layout-8__img" data={photoUrls[0]} />
			)}
			<div className="layout-8__right">
				{photoUrls[1] && (
					<Photo className="img-fluid layout-8__img" data={photoUrls[1]} />
				)}
				{photoUrls[2] && (
					<Photo className="img-fluid layout-8__img" data={photoUrls[2]} />
				)}
			</div>
		</div>
	);
}
