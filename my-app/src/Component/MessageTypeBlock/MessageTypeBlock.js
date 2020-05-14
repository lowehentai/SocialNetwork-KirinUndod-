import React from 'react';
//NavLink Import
import { NavLink } from 'react-router-dom';
//Style Import
import MessageTypeBlockStyle from './MessageTypeBlock.module.css';
//Component Import
import MessageTypePuncts from './MessageTypePuncts/MessageTypePuncts.js';

class MessageTypeBlock extends React.Component {
    puncts = this.props.Info.map(el => <MessageTypePuncts key={el.id} url={el.url} name={el.name} image={el.image} />);
    render() {
        return (
            <div className={MessageTypeBlockStyle.MessageTypeBlock}>
                <div className={MessageTypeBlockStyle.block}>
                    {this.puncts}
                </div>
            </div>
        );
    }
}

export default MessageTypeBlock;