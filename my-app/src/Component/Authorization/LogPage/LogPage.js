import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Import 
import LogPageStyle from './LogPage.module.css';
//Component Import
import SignInWindow from './SignInWindow.js'
import SignUpWindow from './SignUpWindow.js'

class LogPage extends React.Component {
    render() {
        return (
            <Router>
                <div className={LogPageStyle.LogPage} >
                    <Route exact path="/login" render={() => <SignInWindow />} />
                    <Route path="/login/sign" render={() => <SignUpWindow />} />
                </div>
            </Router>
        );
    }
}

export default LogPage;