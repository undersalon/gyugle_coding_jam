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
		'font-family': 'Nanum Square',
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
	ol: {
		'text-align': 'left',
		margin: '0 auto',
		display: 'table',
		width : 380
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
							About Session
						</Typography>
						<span className={classes.line} />
						<span className={classes.font}>
							<Typography variant="headline" className={classes.subTitle} gutterBottom>
							아래 셋 중 하나라도 포함된다면<br />😎 당신은 <b>6월 1일</b> 규글 코딩잼에 참여한다. 😎
							</Typography>
							<br/>
							<div>
								<ol className={classes.ol}>
									<li>금요일에 심심한 사람</li>
									<li>암호 화폐에 관심 있는 사람</li>
									<li>자동거래 프로그램을 만들어보고 싶은 사람</li>
									<li>철권 할 사람(?)</li>
									<li>자유롭게 코딩하고 싶은사람</li>
								</ol>
							</div>
							<br/>
							<br />
							<Typography variant="headline" className={classes.subTitle} gutterBottom>
							규글 코딩잼의 주제는 다음과 같다.
							</Typography>
							<br/>
							<ol className={classes.ol}>
								<li>암호 화폐 모의 투자 (최대 20명)</li>
								<li>자유주제(5인 이하)</li>
								<li>그냥 코인에 관심있는사람</li>
							</ol>
							<br/>
							<br/>
							<Typography variant="headline" className={classes.subTitle} gutterBottom>
							참여 방법은 아래와 같다.
							</Typography>
							<br/>
							<ol className={classes.ol}>
								<li>페이스북에 댓글을 단다.<br/>(ex : 황지만/개발, 한규일/철권)</li>
								<li>신청자 이름의 계좌로 1만원을 송금한다.<br/>(정보현, 케이뱅크 100-187-590049)</li>
								<li> 6월 1일 언더싸롱으로 찾아온다.<br/>(분당구 정자동 137-10 지하 1층)</li>
								<li><b>떡상 가즈아!</b> 를 외치면 문이 열린다.</li>
								<li>뭐라도 만들어서 1등을 노려본다.<br/>몰빵/수동 거래도 가능하다.</li>
							</ol>
						</span>
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