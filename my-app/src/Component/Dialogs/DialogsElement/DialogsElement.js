import React from 'react';
//Style Import
import DialogsElementStyle from './DialogsElement.module.css';

const DialogsElement = (props) => {
    return (
        <div className={DialogsElementStyle.DialogsElement}>
            <div className={DialogsElementStyle.messageBlock}>
                <div className={DialogsElementStyle.UsersInfo}>
                    <div className={DialogsElementStyle.ImgNameWrapper}>
                        <img src={require('../../All_Icons/Vectoravatar.png')} className={DialogsElementStyle.UserImg} alt="Icon Avatart"></img>
                        <div className={DialogsElementStyle.Name}>{props.name}</div>
                    </div>
                    <div className={DialogsElementStyle.lastMessageTime}>{props.lastTime}</div>
                </div>
                <div className={DialogsElementStyle.Description}>{props.msg}</div>
            </div>
        </div>
    );
}

export default DialogsElement;