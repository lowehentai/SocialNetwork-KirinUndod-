import React from 'react';
//Style Import
import MessageComponentStyle from './MessageComponent.module.css';

const MessageComponent = () => {
    return (
        <div calssName={MessageComponentStyle.MessageComponent}>
            <div className={MessageComponentStyle.block}>
                <div className={MessageComponentStyle.search_wrapper}>
                    <img src={require('../All_Icons/Vectorlup.png')}></img>
                    <form className={MessageComponentStyle.form} method="POST">
                        <input type="text" className={MessageComponentStyle.input} maxLength="60"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MessageComponent;