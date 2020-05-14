import React from 'react';
//Router Import 
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Import -- Import Log.module.css
import CompHeaderLogStyle from './CompHeaderLog.module.css';

class CompHeaderLog extends React.Component {
    constructor(props) {
        super(props);
        this.searchLine = window.location;
        this.isBackground = this.isBackground;
        if (this.searchLine.href === 'https://analytics.kirinundod.com/') {
            window.location = 'https://analytics.kirinundod.com/login';
        } if (this.searchLine.hash === '#Up' || this.searchLine.href === 'https://analytics.kirinundod.com/login') {
            this.isBackground = true;
        } else {
            this.isBackground = false;
        }
    }
    render() {
        return (
            <Router>
                <div style={{ backgroundColor: this.isBackground ? '#000000a2' : '#404040' }} className={CompHeaderLogStyle.Header}>
                    <div className={CompHeaderLogStyle.container}>
                        <div className={CompHeaderLogStyle.wrapper}>
                            <div className={CompHeaderLogStyle.logo}>{this.props.Social.Name}
                                <a href="/lok/main" className={CompHeaderLogStyle.version}>{this.props.Social.Version}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default CompHeaderLog;