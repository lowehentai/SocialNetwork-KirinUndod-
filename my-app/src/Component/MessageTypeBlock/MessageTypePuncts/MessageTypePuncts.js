import React from 'react';
//NavLink Import
import { NavLink } from 'react-router-dom';
//Style Import
import MessageTypePunctsStyle from './MessageTypePuncts.module.css';

class MessageTypePuncts extends React.Component {
    render() {
        return (
            <div className={MessageTypePunctsStyle.MessageTypeBlock}>
                <div className={MessageTypePunctsStyle.puncts_wrapper}>
                    <NavLink to={'/' + this.props.url} className={MessageTypePunctsStyle.puncts} activeClassName={MessageTypePunctsStyle.active_button}>
                        <div className={MessageTypePunctsStyle.punct}>{this.props.name}</div>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default MessageTypePuncts;