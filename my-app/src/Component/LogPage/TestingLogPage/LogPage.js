import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Import 
import LogPageStyle from './LogPage.module.css';


import SingUpWindow from './SingUpWindow.js'
import SingInWindow from './SingInWindow.js'

const LogPage = () => {
    return (
        <Router>
            <div className={LogPageStyle.LogPage} >
                <Route path="/log/singIn" render={() => <SingInWindow GoRender={LogPage} />} />
                <Route path="/log/singUp" render={() => <SingUpWindow />} />
            </div>
        </Router>

    );
}

export default LogPage;