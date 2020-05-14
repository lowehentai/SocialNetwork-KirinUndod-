import { myTime } from './Store.js';
import avatarImg from '../assest/images/2.jpg';

const SEND_MESSAGE = 'SEND-MESSAGE',
    UPDATE_MESSAGE_INPUT = 'UPDATE_MESSAGE_INPUT';

let initialState = {
    Information: [
        { id: 1, name: 'Hentai Hentaiovic', status: 'Developer', extraStatus: 'Tester', avatarImg: avatarImg }
    ],
    UserDialogs: [
        { id: 1, msg: 'Hello !', image: 'NoN', name: 'Hentai', lastTime: '12:00' }
        // { id: 2, msg: 'Hi', image: 'NoN', name: 'asd', lastTime: '12:00' },
        // { id: 3, msg: 'Hentai is best !', image: 'NoN', name: 'dsa', lastTime: '12:00' },
        // { id: 4, msg: 'はい', image: 'NoN', name: 'asd', lastTime: '12:00' },
        // { id: 5, msg: 'さようなら！', image: 'NoN', name: 'dsa', lastTime: '12:00' }
    ],
    UserDialogsInput: ''
};

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMsg = {
                id: 2,
                msg: state.UserDialogsInput,
                image: '',
                name: state.Information.map(element => [element.name]),
                lastTime: myTime()
            };
            return {
                ...state,
                UserDialogsInput: '',
                UserDialogs: [...state.UserDialogs, newMsg]// ( , ) new element to -> @ UserDialogs, {id: 1, name: 'John'} @
            };
        case UPDATE_MESSAGE_INPUT:
            return {
                ...state,//deep copy state ( , ) current copy->
                UserDialogsInput: action.updateText
            };
        default:
            return state;
    }
}




export default DialogsReducer;

export const sendMessageCreatorAction = (text) => ({ type: SEND_MESSAGE, newMsg: text });
export const updateMessageInputCreatorAction = (text) => ({ type: UPDATE_MESSAGE_INPUT, updateText: text });