import React from 'react';
//Style Import
import UserMessageBlockStyle from './UserMessageBlock.module.css';

const UserMessageBlock = (props) => {
    return(
        <div className={UserMessageBlockStyle.UserMessageBlock}>
            <div className={UserMessageBlockStyle.block}>
                <img src={require('../All_Icons/Vectoravatar.png')} className={UserMessageBlockStyle.img}></img>
                <div className={UserMessageBlockStyle.text_wrapper}>
                    <div className={UserMessageBlockStyle.UsersName}>
                        {props.name}
                    </div>
                    <div className={UserMessageBlockStyle.LastMessage}>
                        I Love Hentai !
                    </div>
                </div>
                <div className={UserMessageBlockStyle.TimeLastMessage}>
                    12:00
                </div>
            </div>
        </div>
    );
}

export default UserMessageBlock;