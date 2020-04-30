import React from 'react';
//NavLink Import 
import { NavLink } from 'react-router-dom';
//Style Import
import DialogsStyle from './Dialogs.module.css';
//Component Import 
import DialogsElement from './DialogsElement/DialogsElement.js';
//Utility Import 
import { sendMessageCreatorAction, updateMessageInputCreatorAction } from '../../Redux/Dialog-reducer.js';

const Dialogs = (props) => {
    debugger;
    let DialogsElementMap = props.Info.UserDialogs.map(el => <DialogsElement name={el.name} msg={el.msg} image={el.image} lastTime={el.lastTime} />),
        textInput = React.createRef(),
        sendMsg = () => {
            let text = textInput.current.value;
            props.dispatch(sendMessageCreatorAction(text));
        },
        onMsgChange = () => {
            let text = textInput.current.value;
            props.dispatch(updateMessageInputCreatorAction(text));
        };

    return (
        <div className={DialogsStyle.Dialogs}>
            <div className={DialogsStyle.block}>
                <div className={DialogsStyle.head}>
                    <NavLink to='/message'>
                        <button className={DialogsStyle.buttonPrev}>
                            {'<'} Back
                    </button>
                    </NavLink>
                    <div className={DialogsStyle.ContactInfo}>
                        <div className={DialogsStyle.ContactName}>
                            Hentai
                        </div>
                        <div className={DialogsStyle.LastOnlineTime}>
                            123
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
                    {DialogsElementMap}
                </div>
                <div className={DialogsStyle.bottom}>
                    <div className={DialogsStyle.addMedia}>
                        +
                    </div>
                    {/* form */}
                    <div>
                        <div className={DialogsStyle.input_wrapper}>
                            <input className={DialogsStyle.input} onChange={onMsgChange} value={props.Info.UserDialogsInput} ref={textInput} type="text" maxLength="120" placeholder="Write Message" autoFocus></input>
                            <button className={DialogsStyle.sendButton} onClick={sendMsg}>
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