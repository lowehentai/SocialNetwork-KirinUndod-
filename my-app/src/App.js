import React from 'react';
//Route Import
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Module Import
import appStyle from './App.module.css';
//Component Import
import CompHeader from './Component/CompHeader/CompHeader.js';
import PageContainer from './Component/Page/PageContainer.jsx';
import CompHeaderLog from './Component/CompHeader/CompHeaderLog/CompHeaderLog.js';
import LogPage from './Component/Authorization/LogPage/LogPage.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.searchLine = window.location;
		if (this.searchLine.href === 'https://analytics.kirinundod.com/') {
			window.location = 'https://analytics.kirinundod.com/login';
		} if (this.searchLine.href === 'http://localhost:3000/') {
			window.location = 'http://localhost:3000/login';
		} if (this.searchLine.href === 'http://192.168.1.104:3000/') {
			window.location = 'http://192.168.1.104:3000/login';
		}
	}
	render() {
		return (
			<Router>
				<div className={appStyle.App}>
					<Route path='/' render={() => <CompHeaderLog Social={this.props.Info.PropsInfo.SocialNetwork} />}></Route>
					<Route path='/login' render={() => <LogPage />}></Route>
					<Route path='/lok' render={() => <CompHeader Info={this.props.Info.Dialogs.Information} Social={this.props.Info.PropsInfo.SocialNetwork} />}></Route>
					<Route path='/lok' component={() => <PageContainer />}></Route>
				</div>
			</Router >
		);
	}
}

export default App;