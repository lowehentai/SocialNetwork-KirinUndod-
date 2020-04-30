import { myTime } from '../Redux/State.js';

const SEND_MESSAGE = 'SEND-MESSAGE',
    UPDATE_MESSAGE_INPUT = 'UPDATE_MESSAGE_INPUT',
    ADD_TIME = 'ADD-TIME';

const DialogsReducer = (state, action) => {
    debugger;
    switch (action.type) {
        case SEND_MESSAGE:
            let newMsg = {
                id: 2,
                msg: state.UserMessage.UserDialogsInput,
                image: '',
                name: state.User.Information.map(element => [element.name]),
                lastTime: myTime()
            };
            state.UserMessage.UserDialogs.push(newMsg);
            state.UserMessage.UserDialogsInput = '';
            return state;

        case UPDATE_MESSAGE_INPUT:
            state.UserMessage.UserDialogsInput = action.newMsg;
            return state;

        default:
            return state;
    }
}




export default DialogsReducer;

export const sendMessageCreatorAction = (text) => ({ type: SEND_MESSAGE, newMsg: text });
export const updateMessageInputCreatorAction = (text) => ({ type: UPDATE_MESSAGE_INPUT, newMsg: text });