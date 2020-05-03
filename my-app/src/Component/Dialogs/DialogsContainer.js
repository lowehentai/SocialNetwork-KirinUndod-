import React from 'react';
//Component Import 
import Dialogs from './Dialogs.js';
import DialogsElement from './DialogsElement/DialogsElement.js';

//Utility Import 
import { sendMessageCreatorAction, updateMessageInputCreatorAction } from '../../Redux/Dialog-reducer.js';
import { myTime } from '../../Redux/Store.js';
import StoreContext from '../../StoreContext.js';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let DialogsElementMap = store.getState().Dialogs.UserMessage.UserDialogs.map(el => <DialogsElement name={el.name} msg={el.msg} image={el.image} lastTime={el.lastTime} />);
                let sendMessage = (text) => {
                    store.dispatch(sendMessageCreatorAction(text));
                };
                let updateMessageInput = (text) => {
                    store.dispatch(updateMessageInputCreatorAction(text));
                };

                return <Dialogs sendMessage={sendMessage} updateMessageInput={updateMessageInput} DialogsElementMap={DialogsElementMap} myTime={myTime} store={store.getState().Dialogs.UserMessage} />
            }}
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;