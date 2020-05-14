import React from 'react';
//NavLink Import
import { NavLink } from 'react-router-dom';
//Style Import
import UserMessageBlockStyle from './UserMessageBlock.module.css';

class UserMessageBlock extends React.Component {
    render() {
        return (
            <div className={UserMessageBlockStyle.UserMessageBlock}>
                <NavLink to={this.props.url} className={UserMessageBlockStyle.navlink}>
                    <div className={UserMessageBlockStyle.block}>
                        <img src={require('../All_Icons/Vectoravatar.png')} className={UserMessageBlockStyle.img}></img>
                        <div className={UserMessageBlockStyle.text_wrapper}>
                            <div className={UserMessageBlockStyle.UsersName}>
                                {this.props.name}
                            </div>
                            <div className={UserMessageBlockStyle.LastMessage}>
                                {this.props.lastMessage}
                            </div>
                        </div>
                        <div className={UserMessageBlockStyle.TimeLastMessage}>
                            {this.props.lastMsgTime}
                        </div>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default UserMessageBlock;