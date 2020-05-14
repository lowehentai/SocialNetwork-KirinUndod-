import { myTime } from './Store.js';
import avatarImg from '../assest/images/2.jpg';
import avatarImg2 from '../assest/images/7.jpg';

const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    ADD_TIME = 'ADD-TIME';

let initialState = {
    Information: [
        { id: 1, name: 'Hentai Hentaiovic', status: 'Developer', extraStatus: 'Tester', avatarImg: avatarImg }
    ],
    UserPosted: [
        { id: 1, Time: '12:00', avatarImg: avatarImg2, like: 192, message: 51, name: 'Hentai is good !', descr: 'Hentai <3!', image: 'https://www.wallpaperhi.com/thumbnails/detail/20120131/fatestay%20night%20ecchi%20saber%201600x1200%20wallpaper_www.wallpaperhi.com_26.jpg' }
        // { id: 2, Time: '12:00', avatarImg: 'NoN', like: 112, message: 55, name: 'Hentai 2', descr: 'Hentai \"Amanee!\" the best !', image: '' },
        // { id: 3, Time: '12:00', avatarImg: 'NoN', like: 152, message: 58, name: 'Hentai 3', descr: 'Hey !', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZBULcIKT4DgTHbWetD2UYlH-QZZ8NVrFH1KwiZwTZLg_zaa2m&usqp=CAU' },
        // { id: 4, Time: '12:00', avatarImg: 'NoN', like: 172, message: 54, name: 'Hentai 4', descr: 'Hi World !', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS74_Vu6drYZHR24vv1UN4ueMtn2_d3wYXqBa2TO10p4wKAKPRy&usqp=CAU' },
        // { id: 5, Time: '12:00', avatarImg: 'NoN', like: 92, message: 85, name: 'Hentai 5', descr: 'Comment Testing !', image: '' },
        // { id: 6, Time: '12:00', avatarImg: 'NoN', like: 62, message: 53, name: 'Hentai 6', descr: 'oh ya !', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiKxD7WkZCz5G9nZBHgMSxEkLfJqah2EW3SNizKCZaBB99bqQV&usqp=CAU' }
    ],
    PostInput: ''
};
const CommentInputReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                Time: myTime(),
                avatarImg: state.Information.map(el => [el.avatarImg]),
                like: 0,
                message: 0,
                name: state.Information.map(el => [el.name]),
                descr: state.PostInput,
                image: ''
            };
            return {
                ...state,
                PostInput: '',
                UserPosted: [...state.UserPosted, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                PostInput: action.updateText
            }
        }
        default:
            return state;
    }
}


export default CommentInputReducer;

export const addPostCreatorAction = (text) => ({ type: ADD_POST, newText: text });
export const updateNewPostTextCreatorAction = (text) => ({ type: UPDATE_NEW_POST_TEXT, updateText: text });