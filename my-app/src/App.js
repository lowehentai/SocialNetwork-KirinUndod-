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

function App(props) {
	return (
		<Router>
			<div className={appStyle.App}>
				<Route path='/' render={() => <CompHeader />}></Route>
				<Route exact path='/as' render={() => <h1 className={appStyle.Pred}>Click Icon</h1>}></Route>
				<Route path='/' render={() => <Page Info={props.Info} addPost={props.addPost}/>}></Route>
			</div>
		</Router>
	);
}

export default App;
