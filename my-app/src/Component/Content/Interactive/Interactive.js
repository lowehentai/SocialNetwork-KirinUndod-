import React from 'react';
//Style Module Import
import InteractiveStyle from './Interactive.module.css';

const Interactive = (props) => {
    return (
        <div className={InteractiveStyle.Interactive}>
            <div className={InteractiveStyle.block}>
                <div className={InteractiveStyle.wrapper}>
                    <img className={InteractiveStyle.img} src={require('../../All_Icons/Vectorheart.png')} />
                    <span className={InteractiveStyle.CountLike}>{props.Like}</span>
                </div>
                <div className={InteractiveStyle.wrapper}>
                    <img className={InteractiveStyle.img} src={require('../../All_Icons/messageBox.png')} />
                    <span className={InteractiveStyle.CountLike}>{props.Message}</span>
                </div>
            </div>
        </div>
    );
}

export default Interactive;