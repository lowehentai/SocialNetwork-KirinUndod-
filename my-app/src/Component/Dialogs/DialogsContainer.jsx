import React from 'react';
//Component Import 
import Dialogs from './Dialogs.js';
import DialogsElement from './DialogsElement/DialogsElement.js';
//Utility Import 
import { sendMessageCreatorAction, updateMessageInputCreatorAction } from '../../Redux/Dialog-reducer.js';
import { connect } from 'react-redux';

const myTime = () => {
    let dat = new Date(),
        myHours = dat.getHours(),
        myMinutes = dat.getMinutes(),
        timeSet;
    if (myHours <= 9) {
        myHours = '0' + myHours;
    } if (myMinutes <= 9) {
        myMinutes = '0' + myMinutes;
    }
    timeSet = myHours + ':' + myMinutes;
    return timeSet;
}

let mapStateToProps = (state) => {
    let DialogsElementMap = state.Dialogs.UserDialogs.map(el => <DialogsElement key={el.id} name={el.name} msg={el.msg} image={el.image} lastTime={el.lastTime} />);
    return {
        UserMessage: state.Dialogs,
        UserDialogsInput: state.Dialogs.UserDialogsInput,
        DialogsElementMap: DialogsElementMap,
        myTime: myTime()
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageCreatorAction(text));
        },
        updateMessageInput: (text) => {
            dispatch(updateMessageInputCreatorAction(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;