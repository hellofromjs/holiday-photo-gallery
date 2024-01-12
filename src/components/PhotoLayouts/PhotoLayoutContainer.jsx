import { v4 as uuidv4 } from "uuid";

import Layout0 from "../PhotoLayouts/Layout0/Layout0";
import Layout1 from "../PhotoLayouts/Layout1/Layout1";
import Layout2 from "../PhotoLayouts/Layout2/Layout2";
import Layout3 from "../PhotoLayouts/Layout3/Layout3";
import Layout4 from "../PhotoLayouts/Layout4/Layout4";
import Layout5 from "../PhotoLayouts/Layout5/Layout5";
import Layout6 from "../PhotoLayouts/Layout6/Layout6";
import Layout7 from "../PhotoLayouts/Layout7/Layout7";
import Layout8 from "../PhotoLayouts/Layout8/Layout8";

export default function PhotoLayoutContainer({ layoutIndex, photos }) {
	const layouts = [
		{
			layout: Layout0,
			photosCount: 1,
		},
		{
			layout: Layout1,
			photosCount: 2,
		},
		{
			layout: Layout2,
			photosCount: 4,
		},
		{
			layout: Layout3,
			photosCount: 1,
		},
		{
			layout: Layout4,
			photosCount: 2,
		},
		{
			layout: Layout5,
			photosCount: 4,
		},
		{
			layout: Layout6,
			photosCount: 3,
		},
		{
			layout: Layout7,
			photosCount: 3,
		},
		{
			layout: Layout8,
			photosCount: 3,
		},
	];

	const SelectedLayout = layouts[layoutIndex].layout;


	function layoutBlocks() {
		let current = [];
		const elements = [];

		for (let i = 0; i < photos.length; i++) {
			current.push(photos[i]);

			if (current.length == layouts[layoutIndex].photosCount) {
				elements.push(<SelectedLayout key={uuidv4()} photoUrls={current} />);
				current = [];
			}
		}

		if (current.length > 0) {
			elements.push(<SelectedLayout key={uuidv4()} photoUrls={current} />);
		}

		return elements;
	}


	return (
		<div>
			{layoutBlocks()}
		</div>
	);
}
