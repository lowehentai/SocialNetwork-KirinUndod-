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
import CompHeaderLog from './Component/CompHeader/CompHeaderLog/CompHeaderLog.js';
import StoreContext from './StoreContext';

function App() {
	return (
		<StoreContext.Consumer>
			{(store) =>
				<Router>
					<div className={appStyle.App}>
						<Route path='/' render={() => <CompHeaderLog Social={store.getState().PropsInfo.SocialNetwork} />}></Route>
						<Route path='/lok' render={() => <CompHeader Info={store.getState().Dialogs.User.Information} Social={store.getState().PropsInfo.SocialNetwork} />}></Route>
						<Route exact path='/' render={() => <Log />}></Route>
						<Route path='/lok' render={() => <Page Info={store.getState()} />}></Route>
						<Route path='/sing' render={() => <SingInPage />}></Route>
						<Route path='/create' render={() => <CreateAccPage />}></Route>
					</div>
				</Router >
			}
		</StoreContext.Consumer>
	);
}

export default App;

//addPost={props.addPost} updateNewPostText={props.updateNewPostText}

