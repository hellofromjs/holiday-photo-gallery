import "./LayoutSelection.scss";
import layoutIcon0 from "../../assets/images/layout-icons/0.jpg";
import layoutIcon1 from "../../assets/images/layout-icons/1.jpg";
import layoutIcon2 from "../../assets/images/layout-icons/2.jpg";
import layoutIcon3 from "../../assets/images/layout-icons/3.jpg";
import layoutIcon4 from "../../assets/images/layout-icons/4.jpg";
import layoutIcon5 from "../../assets/images/layout-icons/5.jpg";
import layoutIcon6 from "../../assets/images/layout-icons/6.jpg";
import layoutIcon7 from "../../assets/images/layout-icons/7.jpg";
import layoutIcon8 from "../../assets/images/layout-icons/8.jpg";

export default function LayoutSelection({ onSelect }) {
	const icons = [
		layoutIcon0,
		layoutIcon1,
		layoutIcon2,
		layoutIcon3,
		layoutIcon4,
		layoutIcon5,
		layoutIcon6,
		layoutIcon7,
		layoutIcon8,
	];

	return (
		<div className="dropdown">
			<button
				type="button"
				className="btn btn-primary dropdown-toggle"
				data-bs-toggle="dropdown"
				aria-expanded="false"
				data-bs-auto-close="true"
			>
				Change Layout
			</button>
			<div className="dropdown-menu layout-selection">
				<h2 className="layout-selection__header">Format</h2>
				<div className="layout-selection__images">
					{icons.map((icon, i) => (
						<img
							key={i}
							onClick={() => onSelect(i)}
							src={icon}
							className="layout-selection__images__img"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
