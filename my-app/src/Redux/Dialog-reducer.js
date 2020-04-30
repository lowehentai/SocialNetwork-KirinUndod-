import { myTime } from './Store.js';

const SEND_MESSAGE = 'SEND-MESSAGE',
    UPDATE_MESSAGE_INPUT = 'UPDATE_MESSAGE_INPUT',
    ADD_TIME = 'ADD-TIME';

let initialState = {
    User: {
        Information: [
            { id: 1, name: 'Hentai Hentaiovic', status: 'Developer', extraStatus: 'Tester', avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp&usqp=CAU' }
        ]
    },
    UserMessage: {
        UserDialogs: [
            { id: 1, msg: 'Hello !', image: 'NoN', name: 'Hentai', lastTime: '12:00' }
            // { id: 2, msg: 'Hi', image: 'NoN', name: 'asd', lastTime: '12:00' },
            // { id: 3, msg: 'Hentai is best !', image: 'NoN', name: 'dsa', lastTime: '12:00' },
            // { id: 4, msg: 'はい', image: 'NoN', name: 'asd', lastTime: '12:00' },
            // { id: 5, msg: 'さようなら！', image: 'NoN', name: 'dsa', lastTime: '12:00' }
        ],
        UserDialogsInput: ''
    }
};

const DialogsReducer = (state = initialState, action) => {
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