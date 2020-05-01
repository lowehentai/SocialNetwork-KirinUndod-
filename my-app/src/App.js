import React from 'react';
//Route Import
import { BrowserRouter as Router, Route } from 'react-router-dom';
//NavLink Import
// import { NavLink } from 'react-router-dom';
//Style Module Import
import appStyle from './App.module.css';
//Commonent Import
import CompHeader from './Component/CompHeader/CompHeader.js';
import Page from './Component/Page/Page.js';
import Log from './Component/LogPage/Log/Log.js';
import SingInPage from './Component/LogPage/SingInPage/SingInPage.js';
import CreateAccPage from './Component/LogPage/CreateAccPage/CreateAccPage.js';

function App(props) {
	return (
		<Router>
			<div className={appStyle.App}>
				<Route path='/' render={() => <CompHeader Info={props.Info.Dialogs.User.Information} />}></Route>
				<Route exact path='/' render={() => <Log />}></Route>
				<Route path='/lok' render={() => <Page Info={props.Info} dispatch={props.dispatch} />}></Route>
				<Route path='/sing' render={() => <SingInPage />}></Route>
				<Route path='/create' render={() => <CreateAccPage />}></Route>
			</div>
		</Router >
	);
}

export default App;

//addPost={props.addPost} updateNewPostText={props.updateNewPostText}