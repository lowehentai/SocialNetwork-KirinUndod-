import React from 'react';
//Route Import
import { BrowserRouter as Router, Route } from 'react-router-dom';
//NavLink Import
// import { NavLink } from 'react-router-dom';
//Style Module Import
import appStyle from './App.module.css';
//Component Import
import CompHeader from './Component/CompHeader/CompHeader.js';
import PageContainer from './Component/Page/PageContainer.js';
// import Log from './Component/LogPage/Log/Log.js';
// import SingInPage from './Component/LogPage/SingInPage/SingInPage.js';
// import CreateAccPage from './Component/LogPage/CreateAccPage/CreateAccPage.js';
import CompHeaderLog from './Component/CompHeader/CompHeaderLog/CompHeaderLog.js';
import LogPage from './Component/LogPage/TestingLogPage/LogPage.js';

function App(props) {
	return (
		<Router>
			<div className={appStyle.App}>
				<Route path='/' render={() => <CompHeaderLog Social={props.Info.PropsInfo.SocialNetwork} />}></Route>
				<Route path='/log' render={() => <LogPage />}></Route>
				<Route path='/lok' render={() => <CompHeader Info={props.Info.Dialogs.Information} Social={props.Info.PropsInfo.SocialNetwork} />}></Route>
				<Route path='/lok' component={() => <PageContainer />}></Route>
				{/* <Route path='/sing' render={() => <SingInPage />}></Route>
				<Route path='/create' render={() => <CreateAccPage />}></Route> */}
			</div>
		</Router >
	);
}

export default App;

//addPost={props.addPost} updateNewPostText={props.updateNewPostText}

