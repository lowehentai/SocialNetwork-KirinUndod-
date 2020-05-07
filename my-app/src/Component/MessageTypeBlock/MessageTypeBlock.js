import React from 'react';
//NavLink Import
import { NavLink } from 'react-router-dom';
//Style Import
import MessageTypeBlockStyle from './MessageTypeBlock.module.css';
//Component Import
import MessageTypePuncts from './MessageTypePuncts/MessageTypePuncts.js';

const MessageTypeBlock = (props) => {
    let puncts = props.Info.map(el => <MessageTypePuncts key={el.id} url={el.url} name={el.name} image={el.image} />);
    return (
        <div className={MessageTypeBlockStyle.MessageTypeBlock}>
            <div className={MessageTypeBlockStyle.block}>
                {puncts}
            </div>
        </div>
    );
}

export default MessageTypeBlock;