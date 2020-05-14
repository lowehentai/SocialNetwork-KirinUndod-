import React from 'react';
//Style Import
import MessageComponentStyle from './MessageComponent.module.css';
//Component Import 
import UserMessageBlock from '../UserMessageBlock/UserMessageBlock.js';

class MessageComponent extends React.Component {
    message = this.props.Info.map(el => <UserMessageBlock key={el.id} name={el.name} url={el.url} lastMessage={el.lastMessage} lastMsgTime={el.lastMsgTime} />);
    render() {
        return (
            <div className={MessageComponentStyle.MessageComponent}>
                <div className={MessageComponentStyle.block}>
                    <div className={MessageComponentStyle.search_wrapper}>
                        <img src={require('../All_Icons/Vectorlup.png')}></img>
                        <form className={MessageComponentStyle.form} method="POST">
                            <input type="text" className={MessageComponentStyle.input} maxLength="60" placeholder="Search"></input>
                        </form>
                    </div>
                    {this.message}
                </div>
            </div>
        );
    }
}

export default MessageComponent;