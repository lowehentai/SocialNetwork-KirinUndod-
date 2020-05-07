import React from 'react';
//NavLink Import
import { NavLink } from 'react-router-dom';
//Style Import
import MessageTypePunctsStyle from './MessageTypePuncts.module.css';

const MessageTypePuncts = (props) => {
    return (
        <div className={MessageTypePunctsStyle.MessageTypeBlock}>
            <div className={MessageTypePunctsStyle.puncts_wrapper}>
                <NavLink to={'/' + props.url} className={MessageTypePunctsStyle.puncts} activeClassName={MessageTypePunctsStyle.active_button}>
                    {/* <img src={require(props.image)}></img> */}
                    <div className={MessageTypePunctsStyle.punct}>{props.name}</div>
                </NavLink>
            </div>
        </div>
    );
}

export default MessageTypePuncts;