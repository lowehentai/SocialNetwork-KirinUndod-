import CommentInputReducer from './CommentInput-reducer.js';
import DialogsReducer from './Dialog-reducer.js';


let store = {
    _state: {
        User: {
            Information: [
                { id: 1, name: 'Hentai Hentaiovic', status: 'Developer', extraStatus: 'Tester', avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp&usqp=CAU' }
            ]
        },
        QuickAccess: {
            Puncts: [
                { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'lok/home', name: 'Home' },
                { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'lok/main', name: 'Main' },
                { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'lok/message', name: 'Message' },
                { id: 4, image: '../../All_Icons/Vectorhome.png', url: 'lok/friend', name: 'Friend' }
            ]
        },
        MediaMenu: {
            Puncts: [
                { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'lok/main/news', name: 'News' },
                { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'lok/main/photo', name: 'Photo' },
                { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'lok/main/video', name: 'Video' }
            ]
        },
        UsersPosted: {
            UserPosted: [
                { id: 1, Time: '12:00', avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS74_Vu6drYZHR24vv1UN4ueMtn2_d3wYXqBa2TO10p4wKAKPRy&usqp=CAU', like: 192, message: 51, name: 'Hentai is good !', descr: 'Hentai <3!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKvJ4WBzDoGvdtRkIGUyde9fC0DTcIDMQ2RlOm5YUqM3Vr8ojX&usqp=CAU' }
                // { id: 2, Time: '12:00', avatarImg: 'NoN', like: 112, message: 55, name: 'Hentai 2', descr: 'Hentai \"Amanee!\" the best !', image: '' },
                // { id: 3, Time: '12:00', avatarImg: 'NoN', like: 152, message: 58, name: 'Hentai 3', descr: 'Hey !', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZBULcIKT4DgTHbWetD2UYlH-QZZ8NVrFH1KwiZwTZLg_zaa2m&usqp=CAU' },
                // { id: 4, Time: '12:00', avatarImg: 'NoN', like: 172, message: 54, name: 'Hentai 4', descr: 'Hi World !', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS74_Vu6drYZHR24vv1UN4ueMtn2_d3wYXqBa2TO10p4wKAKPRy&usqp=CAU' },
                // { id: 5, Time: '12:00', avatarImg: 'NoN', like: 92, message: 85, name: 'Hentai 5', descr: 'Comment Testing !', image: '' },
                // { id: 6, Time: '12:00', avatarImg: 'NoN', like: 62, message: 53, name: 'Hentai 6', descr: 'oh ya !', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiKxD7WkZCz5G9nZBHgMSxEkLfJqah2EW3SNizKCZaBB99bqQV&usqp=CAU' }
            ],
            PostInput: ''
        },
        MessageType: {
            Puncts: [
                { id: 1, image: '../../All_Icons/Vectorhome.png', url: 'message/allmessage', name: 'All Message' },
                { id: 2, image: '../../All_Icons/Vectorhome.png', url: 'message/unread', name: 'Unread' },
                { id: 3, image: '../../All_Icons/Vectorhome.png', url: 'message/important', name: 'Important' }
            ]
        },
        //user chat
        MessagesBlock: {
            UserDialogBlock: [
                { id: 1, image: '', url: '/lok/message/1', name: 'Hentai', lastMessage: '--', lastMsgTime: '12:00' },
                { id: 2, image: '', url: '/lok/message/2', name: 'Ecchi', lastMessage: '--', lastMsgTime: '12:00' },
                { id: 3, image: '', url: '/lok/message/3', name: 'Vladimir', lastMessage: '--', lastMsgTime: '12:00' },
                { id: 4, image: '', url: '/lok/message/4', name: 'Undod', lastMessage: '--', lastMsgTime: '12:00' },
                { id: 5, image: '', url: '/lok/message/5', name: 'NoN', lastMessage: '--', lastMsgTime: '12:00' },
                { id: 6, image: '', url: '/lok/message/6', name: 'Skritiy', lastMessage: '--', lastMsgTime: '12:00' }
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
    },
    _ReRender() {
        //import the updateNewPostText
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._ReRender = observer;
    },

    dispatch(action) { // {type: 'ADD-POST'}
        //CommentInput.js
        CommentInputReducer(this._state, action);

        //Dialogs.js
        DialogsReducer(this._state, action);

        //ReRender Virtual DOM 
        this._ReRender(this._state);
    }
}

export const myTime = () => {
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
export const locationObserver = (element) => {
    let searchLine = window.location;
    if (searchLine.hash === '#log&singIn' || searchLine.hash === '#log&create') {
        element = true;
    } else {
        element = false;
    }
    return element;
}

// export const addPostCreatorAction = (text) => {
//     return {
//         type: 'ADD-POST',
//         newText: text
//     }
// }
// export const updateNewPostTextCreatorAction = (text) => {
//     return {
//         type: 'UPDATE-NEW-POST-TEXT',
//         newText: text
//     }
//}
//alternative writing

window.store = store;
export default store;

//shotre - OOP

// _addPost() {
//     let newPost = {
//         id: 7,
//         Time: this.dispatch({ type: 'ADD-TIME' }),
//         avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp&usqp=CAU',
//         like: 0,
//         message: 0,
//         name: this._state.Dat_Users.Dat_Information.map(element => [element.name]),
//         descr: this._state.Dat_Users.TestingU,
//         image: ''
//     };
//     this._state.Dat_MediaMenu.Dat_UsersInfo.push(newPost);
//     this._ReRender(this._state);
//     this._state.Dat_Users.TestingU = '';
// },
// _updateNewPostText(newText) {
//     this._state.Dat_Users.TestingU = newText;
//     this._ReRender(this._state);
// },
// _addTime() {
//     let dat = new Date(),
//         myHours = dat.getHours(),
//         myMinutes = dat.getMinutes(),
//         timeSet;
//     if (myHours <= 9) {
//         myHours = '0' + myHours;
//     } if (myMinutes <= 9) {
//         myMinutes = '0' + myMinutes;
//     }
//     timeSet = myHours + ':' + myMinutes;
//     return timeSet;
// },
// dispatch(action) { // {type: 'ADD-POST'}
//     if (action.type === 'ADD-POST') {
//         this._addPost();
//     } else if (action.type === 'ADD-TIME') {
//         this._addTime();
//     } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//         this._updateNewPostText(action.newText);
//     }
// }
// }