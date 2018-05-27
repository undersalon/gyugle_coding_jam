import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

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
	avatarDiv: {
		padding: 0,
		margin: 0,
		'list-style': 'none',
		display: 'flex',
		'-webkit-flex-flow': 'row wrap'
	},
	rewardContainer : {
		margin: 'auto',
	},
	rewardText : {
		padding : '10px'
	},
	avatar: {
		width: 350,
		height: 350
	},
});

function AutoGrid(props) {
	const {classes} = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={0} className={classes.grid}>
				<Grid item xs className={classes.grid}>
					<Paper className={classes.paperRight}>
						<Typography variant="display2" className={classes.fontTitle} gutterBottom>
							REWARDS
						</Typography>
						<div className={classes.avatarDiv}>
							<div className={classes.rewardContainer}>
								<Avatar
									alt="Enter"
									src="./public/img/reward/enter.gif"
									className={classes.avatar}
								/>
								<Typography variant="subheading"  className={classes.rewardText} gutterBottom>
									<b>1등</b> 분노의 엔터
								</Typography>
							</div>
							<div className={classes.rewardContainer}>
								<Avatar
									alt="bitcoin"
									src="./public/img/reward/bitcoin.png"
									className={classes.avatar}
								/>
								<Typography variant="subheading" className={classes.rewardText} gutterBottom>
									<b>꼴등</b> 언더살롱 산 비트코인
								</Typography>
							</div>
							<div className={classes.rewardContainer}>
								<Avatar
									alt="taekwondo"
									src="./public/img/reward/taekwondo.png"
									className={classes.avatar}
								/>
								<Typography variant="subheading"  className={classes.rewardText}  gutterBottom>
									<b>기타</b> 철권 대결 상
								</Typography>
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