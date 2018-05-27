import React from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		position: "fixed",
		width: '100%',
		'min-height': 750,
		top: 0,
		left: 0,
		"background-image": `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("./public/img/bitcoinTitle.gif")`,
		"background-size": "100%"
	}
});

function Section(props) {
	const {classes} = props;

	return (
		<div className={classes.fix}>
			<div className={classes.root} />
		</div>
	);
}

export default withStyles(styles)(Section);