import React from 'react';
//Route Import
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Module Import
import appStyle from './App.module.css';
//Component Import
import CompHeader from './Component/CompHeader/CompHeader.js';
import PageContainer from './Component/Page/PageContainer.js';
import CompHeaderLog from './Component/CompHeader/CompHeaderLog/CompHeaderLog.js';
import LogPage from './Component/Authorization/LogPage/LogPage.js';

class App extends React.Component {
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