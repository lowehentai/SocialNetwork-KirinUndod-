import React from 'react';
//Router Import 
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Import -- Import Log.module.css
import CompHeaderLogStyle from './CompHeaderLog.module.css';

function CompHeaderLog(props) {

    let searchLine = window.location,
        isBackground;
    if (searchLine.hash === '#log&singIn' || searchLine.hash === '#log&create') {
        isBackground = true;
    } else {
        isBackground = false;
    }
    return (
        <Router>
            <div style={{ backgroundColor: isBackground ? '#000000a2' : '#404040' }} className={CompHeaderLogStyle.Header}>
                <div className={CompHeaderLogStyle.container}>
                    <div className={CompHeaderLogStyle.wrapper}>
                        <div className={CompHeaderLogStyle.logo}>{props.Social.Name}<span className={CompHeaderLogStyle.version}>{props.Social.Version}</span></div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default CompHeaderLog;