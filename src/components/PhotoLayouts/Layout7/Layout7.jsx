import Photo from "../../Photo/Photo";
import "./Layout7.scss";

export default function Layout7({ photoUrls }) {
	return (
		<div className="layout-7">
			<div className="layout-7__top">
				{photoUrls[0] && (
					<Photo className="img-fluid layout-7__top__img" data={photoUrls[0]} />
				)}
				{photoUrls[1] && (
					<Photo className="img-fluid layout-7__top__img" data={photoUrls[1]} />
				)}
			</div>
			<div>
				{photoUrls[2] && <Photo className="img-fluid" data={photoUrls[2]} />}
			</div>
		</div>
	);
}
