import React from "react";
import {HashRouter, Route, Switch, Link} from "react-router-dom";
import HomeView from "./components/Home";
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

function IndexView() {
	return <div>IndexView</div>
}

const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	tabsRoot: {
		height: 0,
		'z-index': 100,
		position: 'relative',
		top: '130px',
		'text-align': 'center'
	},
	button: {
		color: 'white',
		'font-size' : '1.2em'
	}
});

class CustomizedTabs extends React.Component {

	constructor() {
		super();
		this.state = {
			value: 0
		};
	}

	handleClick(value) {
		console.log(value);
		this.setState({value});
		if ("Home" === value) {
			location.href = "#/";
		} else if ("Doc" === value){
			location.href = "http://coin.undersalon.com/swagger-ui.html";
		} else if ("Example" === value){
			location.href = "http://coin.undersalon.com/";
		} else if ("Ranking" === value){
			location.href = "http://coin.undersalon.com/rank.html";
		}
	}

	render() {
		const {classes} = this.props;
		const {value} = this.state;

		return (
			<HashRouter>
				<div className={classes.root}>
					<div className={classes.tabsRoot}>
						<Button className={classes.button} onClick={this.handleClick.bind(this, "Home")}>Home</Button>
						<Button className={classes.button} onClick={this.handleClick.bind(this, "Doc")}>Api Doc</Button>
						<Button className={classes.button} onClick={this.handleClick.bind(this, "Example")}>Example</Button>
						<Button className={classes.button} onClick={this.handleClick.bind(this, "Ranking")}>Ranking</Button>
					</div>
					<Route exact path="/" component={HomeView} />
					<Route path="/about" component={IndexView} />
				</div>
			</HashRouter>
		);
	}
}


export default withStyles(styles)(CustomizedTabs);
