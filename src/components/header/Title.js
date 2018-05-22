import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	imageButton: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
	},
	imageTitle: {
		top: 35,
		border: '1px solid currentColor',
		'border-radius': '50px 20px',
		position: 'relative',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
	},
	font: {
		'font-family': 'CulDeSac',
	},
	fontTitle: {
		'font-family': 'Nanum Square'
	}
});


function Title(props) {
	const {classes} = props;
	return (
		<div className="txtNew">
			<Typography className={`header-title ${classes.font}`} variant="display4" gutterBottom>
				GYUGLE CODE JAM
			</Typography>
			<Typography variant="headline" className={classes.fontTitle} gutterBottom>
				Bitcoin Investment Battle
			</Typography>
			<span className={`imageButton ${classes.imageButton}`}>
				<Typography
					component="span"
					variant="subheading"
					color="inherit"
					className={`${classes.imageTitle} ${classes.fontTitle}`}
				>
					{"등록하기"}
				</Typography>
			</span>
		</div>
	);
}

export default withStyles(styles)(Title);