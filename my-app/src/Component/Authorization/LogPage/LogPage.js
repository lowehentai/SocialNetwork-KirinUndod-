import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Import 
import LogPageStyle from './LogPage.module.css';
//Component Import
import SingUpWindow from './SingUpWindow.js'
import SingInWindow from './SingInWindow.js'

class LogPage extends React.Component {
    render() {
        return (
            <Router>
                <div className={LogPageStyle.LogPage} >
                    <Route exact path="/login" render={() => <SingInWindow GoRender={LogPage} />} />
                    <Route path="/login/sing" render={() => <SingUpWindow />} />
                </div>
            </Router>
        );
    }
}

export default LogPage;