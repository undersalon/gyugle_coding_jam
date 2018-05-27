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
		height: "25%"
	},
	paperLeft: {
		textAlign: 'center',
		background: "#201431",
	},
	fontTitle: {
		color: "#eaeaea",
		'font-family': 'bebasNeue',
		'font-size': '5em',
		position: 'relative'
	},
	paperRight: {
		height: "100%",
		textAlign: 'center',
		color: theme.palette.text.secondary,
		background: "#331c64",
		overflow: 'hidden',
		padding: '10%',
		'box-sizing': 'border-box'
	},
	image: {
		width: "120%",
		height: "100%",
		"background-image": `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("/public/img/coding.png")`,
		"background-size": "100%"
	},
	font: {
		'font-family': 'lmmonoproplt',
		'font-size': '0.8em'
	},
	line: {
		display: 'block',
		height: '1.5px',
		border: 0,
		'border-top': '1px solid #ccc',
		'margin': '2em 0',
		padding: 0
	},
	img: {
		"min-height": 800,
		"background-image": `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("./public/img/programmer.gif")`,
		"background-size": "100%",
		position: 'relative'
	},
	ul: {
		"text-align": "left",
		'font-family': 'Nanum Square',
		'color': '#c7c7c7',
		"font-size": 19,
		display: 'table',
		margin: '0 auto',
		padding: '3%'
	},
	subTitle: {
		color: '#c7c7c7'
	}
});

function AutoGrid(props) {
	const {classes} = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={0} className={classes.grid}>
				<Grid item xs={5} className={classes.grid}>
					<Paper className={classes.paperLeft}>
						<div className={classes.img} />

					</Paper>
				</Grid>
				<Grid item xs className={classes.grid}>
					<Paper className={classes.paperRight}>
						<Typography variant="display2" className={classes.fontTitle} gutterBottom>
							RULES
						</Typography>
						<span className={classes.line} />
						<Typography variant="headline" className={classes.subTitle} gutterBottom>
							비트코인 인생역전 나야나 나야나 🎉 🎉
						</Typography>
						<div>
							<ul className={classes.ul}>
								<li>이미 만들어진 오픈소스, 룰베이스, 머신러닝, 손 모든 방법 가능</li>
								<li>실시간 전광판을 만들어서 2시 이후 TV에 집계할 예정</li>
								<li>그날 완성을 못하면 손으로 돌려도 무방함</li>
								<li>비 개발자 팀도 결성 가능하나 손으로 거래 하면 됨<br />(손으로 1등 한 것도 1등으로 인정)</li>
							</ul>
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