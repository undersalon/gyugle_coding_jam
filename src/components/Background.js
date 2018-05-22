import React from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		"min-height": 750,
		"background-image": `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("./public/img/bitcoinTitle.gif")`,
		"background-size": "100%"
	}
});

function Section(props) {
	const {classes} = props;

	return (
		<div>
			<div className={classes.root} />
		</div>
	);
}

export default withStyles(styles)(Section);