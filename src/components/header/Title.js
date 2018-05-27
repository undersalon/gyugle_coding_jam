import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {SocialIcon} from 'react-social-icons';

const styles = theme => ({
	imageButton: {
		left: 0,
		right: 0,
		top: '10px',
		bottom: 0,
		position: 'relative',
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
	},
	icon: {
		'margin-left' : "10px"
	}
});


function Title(props) {
	const {classes} = props;
	return (
		<div className="txtNew">
			<Typography className={`header-title ${classes.font}`} variant="display4" gutterBottom>
				GYUGLE CODE JAM
			</Typography>
			<span className={`imageButton ${classes.imageButton}`}>
				<SocialIcon className={classes.icon} url="https://www.facebook.com/undersalon/" />
				<SocialIcon className={classes.icon} url="https://www.instagram.com/undersalon/?hl=ko" />
				<SocialIcon className={classes.icon} url="http://undersalon.com/" />
			</span>
		</div>
	);
}

export default withStyles(styles)(Title);