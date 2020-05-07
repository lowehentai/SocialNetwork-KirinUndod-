import React from 'react';
//Style Import
import QuickAccessStyle from './QuickAccess.module.css';
//Component Import
import QuickPuncts from './QuickPuncts/QuickPuncts.js';

const QuickAccess = (props) => {
    let puncts = props.Info.map(punct => <QuickPuncts key={punct.id} url={punct.url} name={punct.name} image={punct.image} />)
    return (
        <div className={QuickAccessStyle.QuickAccess}>
            <div className={QuickAccessStyle.block}>
                {puncts}
            </div>
        </div>
    );
}

export default QuickAccess;