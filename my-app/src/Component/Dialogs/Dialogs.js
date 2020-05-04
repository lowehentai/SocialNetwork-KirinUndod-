import React from 'react';
//NavLink Import 
import { NavLink } from 'react-router-dom';
//Style Import
import DialogsStyle from './Dialogs.module.css';
//Component Import 

const Dialogs = (props) => {
    let textInput = React.createRef(),
        onSendMsg = () => {
            let text = textInput.current.value;
            props.sendMessage(text);
        },
        onMsgChange = () => {
            let text = textInput.current.value;
            props.updateMessageInput(text);
        };

    return (
        <div className={DialogsStyle.Dialogs}>
            <div className={DialogsStyle.block}>
                <div className={DialogsStyle.head}>
                    <NavLink to='/lok/message'>
                        <button className={DialogsStyle.buttonPrev}>
                            {'<'} Back
                    </button>
                    </NavLink>
                    <div className={DialogsStyle.ContactInfo}>
                        <div className={DialogsStyle.ContactName}>
                            Hentai
                        </div>
                        <div className={DialogsStyle.LastOnlineTime}>
                            {props.myTime}
                        </div>
                    </div>

                    <div className={DialogsStyle.Right}>
                        <div className={DialogsStyle.ContactSettings}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={DialogsStyle.ContactImage}>
                            <img src={require('../All_Icons/Vectoravatar.png')}></img>
                        </div>
                    </div>
                </div>
                <div className={DialogsStyle.ContentMessages}>
                    {/* Content Messages */}
                    {props.DialogsElementMap}
                </div>
                <div className={DialogsStyle.bottom}>
                    <div className={DialogsStyle.addMedia}>
                        +
                    </div>
                    {/* form */}
                    <div>
                        <div className={DialogsStyle.input_wrapper}>
                            <input className={DialogsStyle.input} onChange={onMsgChange} value={props.UserDialogsInput} ref={textInput} type="text" maxLength="120" placeholder="Write Message" autoFocus></input>
                            <button className={DialogsStyle.sendButton} onClick={onSendMsg}>
                                <img src={require('../All_Icons/.fas.fa-location-arrowsend.png')} className={DialogsStyle.imgSend}></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;