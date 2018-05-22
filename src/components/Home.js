import React from "react";
import Title from "./header/Title";
import Section from "./Section";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Rewards from "./Rewards";
import Background from "./Background";

function Home() {
	return (
		<div id="page-header-root">
			<Background />
			<Title />
			<Section2 />
			<Section />
			<Section3 />
			<Rewards />
			<Section4 />
			<Section3 />
		</div>
	);
}

export default Home;