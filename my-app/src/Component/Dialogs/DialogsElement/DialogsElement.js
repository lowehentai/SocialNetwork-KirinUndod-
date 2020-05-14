import React from 'react';
//Style Import
import DialogsElementStyle from './DialogsElement.module.css';

class DialogsElement extends React.Component {
    render() {
        return (
            <div className={DialogsElementStyle.DialogsElement}>
                <div className={DialogsElementStyle.messageBlock}>
                    <div className={DialogsElementStyle.UsersInfo}>
                        <div className={DialogsElementStyle.ImgNameWrapper}>
                            <img src={require('../../All_Icons/Vectoravatar.png')} className={DialogsElementStyle.UserImg} alt="Icon Avatart"></img>
                            <div className={DialogsElementStyle.Name}>{this.props.name}</div>
                        </div>
                        <div className={DialogsElementStyle.lastMessageTime}>{this.props.lastTime}</div>
                    </div>
                    <div className={DialogsElementStyle.Description}>{this.props.msg}</div>
                </div>
            </div>
        );
    }
}

export default DialogsElement;