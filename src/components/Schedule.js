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
		height: "50%"
	},
	grid: {
		height: "100%",
	},
	fontTitle: {
		color: 'whitesmoke',
		'font-family': 'bebasNeue',
		'font-size': '85px',
	},
	paperRight: {
		height: "100%",
		textAlign: 'center',
		color: theme.palette.text.secondary,
		background: "#2e2b33",
		padding: '5%'
	},
	image: {
		width: "120%",
		height: "100%",
		"background-image": `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("/public/img/coding.png")`,
		"background-size": "100%"
	},
	font: {
		'font-family': 'lmmonoproplt',
		'font-size': '20px',
		color: 'whitesmoke'
	},
	line: {
		display: 'block',
		height: '1.5px',
		border: 0,
		'border-top': '1px solid #ccc',
		'margin': '2em 0',
		padding: 0
	},
	textAlign: {
		width: '300px',
		'text-align': 'left',
		position: 'relative',
		margin: 'auto'
	}
});

function AutoGrid(props) {
	const {classes} = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={0} className={classes.grid}>
				<Grid item xs className={classes.grid}>
					<Paper className={classes.paperRight}>
						<Typography variant="display2" className={classes.fontTitle} gutterBottom>
							SCHEDULE
						</Typography>
						<span className={classes.line} />
						<div className={classes.textAlign}>
							<span className={classes.font}>
								&nbsp;&nbsp;20:30 세션 시작 및 간략 소개<br />
								~&nbsp;21:00 전략 논의 & 개발 시작<br />
								~&nbsp;02:00 봇돌리기 시작<br />
								~&nbsp;03:00 결과발표<br />
							</span>
						</div>
						<span className={classes.line} />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

AutoGrid.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);