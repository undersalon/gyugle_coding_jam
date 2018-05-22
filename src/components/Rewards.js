import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TimeTable from './TimeTable'

const styles = theme => ({
	root: {
		flexGrow: 1,
		'max-height': 250
	},
	grid: {
		height: "100%",
	},
	paperLeft: {
		height: "100%",
		textAlign: 'center',
		color: theme.palette.text.secondary,
		background: "#201431"
	},
	paperRight: {
		height: "100%",
		textAlign: 'left',
		'background': "#D44428",
	},
	typography: {
		height: "100%",
		margin: 0
	},
	font: {
		color: '#D44428',
		'font-size': '55px',
		position: 'relative',
		top: '38%'
	},
	rewards: {
		height: '250px',
		'max-height': 250,
		overflow: 'hidden'
	},
	image: {
		width: '25%',
		height: '100%',
		float: 'right',
		"background-image": `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("/public/img/rewards.png")`,
		"background-size": "100%"
	}
});

function AutoGrid(props) {
	const {classes} = props;

	return (
		<div className={classes.root}>
			<div className={classes.rewards}>
				<div className={classes.image} />
				<div className={classes.image} />
				<div className={classes.image} />
				<div className={classes.image} />
			</div>
		</div>
	);
}

AutoGrid.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);