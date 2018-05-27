import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Map from './Map';
import StreetView from './StreetView';

const styles = theme => ({
	root: {
		flexGrow: 1,
		height: "50%"
	},
	grid: {
		height: "100%",
	},
	paperLeft: {
		height: "100%",
		textAlign: 'center',
		background: "#201431",
	},
	fontTitle: {
		color: '#201431',
		'font-family': 'bebasNeue',
		'font-size': '85px',
	},
	paperRight: {
		height: "100%",
		textAlign: 'center',
		color: theme.palette.text.secondary,
		background: "whitesmoke",
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
		'font-size': '20px'
	},
	line: {
		display: 'block',
		height: '1.5px',
		border: 0,
		'border-top': '1px solid #ccc',
		'margin': '2em 0',
		padding: 0
	},
	avatar: {
		margin: 10,
		width: 120,
		height: 120,
		left: '43%'
	},
	align: {
		padding: 0,
		margin: 0,
		'list-style': 'none',
		display: 'flex',
		'-webkit-flex-flow': 'row wrap'
	},
	map: {
		margin: 'auto'
	},
	subtitle : {
		'padding-bottom' : '30px'
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
							Undersalon Location
						</Typography>
						<Typography variant="subheading" className={classes.subtitle} gutterBottom>
							💈분당구 정자동 137-10 지하 1층💈
						</Typography>
						<div className={classes.align}>
							<div className={classes.map} >
								<Map/>
							</div>
							<div className={classes.map} >
								<StreetView />
							</div>

						</div>
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