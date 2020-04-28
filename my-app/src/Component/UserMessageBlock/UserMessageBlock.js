import React from 'react';
//NavLink Import
import { NavLink } from 'react-router-dom';
//Style Import
import UserMessageBlockStyle from './UserMessageBlock.module.css';

const UserMessageBlock = (props) => {
    return (
        <div className={UserMessageBlockStyle.UserMessageBlock}>
            <NavLink to={props.url} className={UserMessageBlockStyle.navlink}>
                <div className={UserMessageBlockStyle.block}>
                    <img src={require('../All_Icons/Vectoravatar.png')} className={UserMessageBlockStyle.img}></img>
                    <div className={UserMessageBlockStyle.text_wrapper}>
                        <div className={UserMessageBlockStyle.UsersName}>
                            {props.name}
                        </div>
                        <div className={UserMessageBlockStyle.LastMessage}>
                            {props.lastMessage}
                        </div>
                    </div>
                    <div className={UserMessageBlockStyle.TimeLastMessage}>
                        {props.lastMsgTime}
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default UserMessageBlock;