import React from 'react';
//Component Import 
import Dialogs from './Dialogs.js';
import DialogsElement from './DialogsElement/DialogsElement.js';

//Utility Import 
import { sendMessageCreatorAction, updateMessageInputCreatorAction } from '../../Redux/Dialog-reducer.js';
import { myTime } from '../../Redux/Store.js';

const DialogsContainer = (props) => {
    debugger;
    let DialogsElementMap = props.store.Dialogs.UserMessage.UserDialogs.map(el => <DialogsElement name={el.name} msg={el.msg} image={el.image} lastTime={el.lastTime} />);
    let sendMessage = (text) => {
        props.dispatch(sendMessageCreatorAction(text));
    };
    let updateMessageInput = (text) => {
        props.dispatch(updateMessageInputCreatorAction(text));
    };

    return (
        <Dialogs sendMessage={sendMessage} updateMessageInput={updateMessageInput} DialogsElementMap={DialogsElementMap} myTime={myTime} store={props.store.Dialogs.UserMessage} />
    );
}

export default DialogsContainer;