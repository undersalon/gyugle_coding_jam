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
		'font-size': '6em'
	},
	fontTitle: {
		'font-family': 'Nanum Square'
	},
	icon: {
		'margin-left': "10px"
	},
	arrow: {
		width: '5em',
		height: '5em',
		margin: '0 auto',
		display: 'table',
		position: 'relative',
		top: '7em',
		'z-index': 100
	}
});

class Title extends React.Component {

	constructor(props) {
		super(props);
		const {classes} = props;

		this.classes = classes;
		this.state = {
			isMouseOver: false
		};

		this.handleClick = () => {
			window.scrollTo({
				top: 750,
				behavior: "smooth"
			});
		}
	}

	render() {
		return (
			<div className="txtNew">
				<Typography className={`header-title ${this.classes.font}`} variant="display4" gutterBottom>
					GYUGLE CODE JAM
				</Typography>
				<span className={`imageButton ${this.classes.imageButton}`}>
				<SocialIcon className={this.classes.icon} url="https://www.facebook.com/undersalon/" />
				<SocialIcon className={this.classes.icon} url="https://www.instagram.com/undersalon/?hl=ko" />
				<SocialIcon className={this.classes.icon} url="http://undersalon.com/" />
			</span>
				<div className={this.classes.arrow}>
					<img id="animated-example"
					     className={this.state.isMouseOver ? "bounce animated" : ""}
					     onMouseOver={() => this.setState({isMouseOver: true})}
					     onMouseOut={() => this.setState({isMouseOver: false})}
					     onClick={this.handleClick}
					     width="100%" height="100%"
					     src="./public/img/arrow_down.png" />
				</div>
			</div>
		);
	}
}


export default withStyles(styles)(Title);