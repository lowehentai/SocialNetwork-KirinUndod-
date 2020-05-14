import React from 'react';
//Style Module Import
import InteractiveStyle from './Interactive.module.css';

class Interactive extends React.Component {
    render() {
        return (
            <div className={InteractiveStyle.Interactive}>
                <div className={InteractiveStyle.block}>
                    <div className={InteractiveStyle.wrapper}>
                        <button className={InteractiveStyle.button}>
                            <img className={InteractiveStyle.img} src={require('../../All_Icons/Vectorheart.png')} />
                        </button>
                        <span className={InteractiveStyle.CountLike}>{this.props.Like}</span>
                    </div>
                    <div className={InteractiveStyle.wrapper}>
                        <button className={InteractiveStyle.button}>
                            <img className={InteractiveStyle.img} src={require('../../All_Icons/messageBox.png')} />
                        </button>
                        <span className={InteractiveStyle.CountLike}>{this.props.Message}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Interactive;