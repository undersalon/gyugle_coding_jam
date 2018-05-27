import React from "react";
import Title from "./header/Title";
import Schedule from "./Schedule";
import Session from "./Session";
import Rewards from "./Rewards";
import Rules from "./Rules";
import MapContainer from "./MapContainer";
import {withStyles} from '@material-ui/core/styles';
import Background from "./Background";

const styles = theme => ({
	root: {
		top: "750px",
		position: "relative",
	}
});

function Home(props) {

	const {classes} = props;
	return (
		<div id="page-header-root">
			<Background />
			<Title/>
			<div className={classes.root}>
				<Session />
				<Schedule />
				<Rewards />
				<Rules />
				<MapContainer />
			</div>
		</div>
	);
}

export default withStyles(styles)(Home);