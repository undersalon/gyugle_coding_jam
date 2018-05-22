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
		height: 800
	},
	grid: {
		height: "100%",
	},
	paperLeft: {
		height: "100%",
		textAlign: 'center',
		color: theme.palette.text.secondary,
		background: "whitesmoke",
		padding: '15%'
	},
	paperRight: {
		height: "100%",
		textAlign: 'center',
		'background': "#D44428",
	},
	font: {
		'font-family': 'bebasNeue',
		color: 'whitesmoke',
		'font-size': '85px',
		position: 'relative',
		top: '45%'
	},
	image: {
		height: "100%",
		"background-image": `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("/public/img/coding.png")`,
		"background-size": "100%"
	},
	fontParagraph: {
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
	}
});

function AutoGrid(props) {
	const {classes} = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={0} className={classes.grid}>
				<Grid item xs={7} className={classes.grid}>
					<Paper className={classes.paperLeft}>
						<span className={classes.line} />
						<span className={classes.fontParagraph}>
							I'm a paragraph.<br />
							Click here to add your own text and edit me.<br />
							It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. <br />
							Feel free to drag and drop me anywhere you like on your page. <br />
							I’m a great place for you to tell a story and let your users know a little more about you.<br /><br />
							This is a great space to write long text about your company and your services. <br />
							You can use this space to go into a little more detail about your company. <br />
							Talk about your team and what services you provide.
						</span>
						<span className={classes.line} />
					</Paper>
				</Grid>
				<Grid item xs className={classes.grid}>
					<Paper className={classes.paperRight}>
						<span className={classes.font}>Schedule</span>
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