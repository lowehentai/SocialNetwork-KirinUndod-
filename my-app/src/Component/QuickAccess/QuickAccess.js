import React from 'react';
//Style Import
import QuickAccessStyle from './QuickAccess.module.css';
//Component Import
import QuickPuncts from './QuickPuncts/QuickPuncts.js';

class QuickAccess extends React.Component {
    puncts = this.props.Info.map(punct => <QuickPuncts key={punct.id} url={punct.url} name={punct.name} image={punct.image} />)
    render() {
        return (
            <div className={QuickAccessStyle.QuickAccess}>
                <div className={QuickAccessStyle.block}>
                    {this.puncts}
                </div>
            </div>
        );
    }
}

export default QuickAccess;