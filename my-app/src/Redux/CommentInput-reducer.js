import { myTime } from './Store.js';
import avatarImg from '../assest/images/2.jpg';
import avatarImg2 from '../assest/images/7.jpg';

const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    Information: [
        { id: 1, name: 'Hentai Hentaiovic', status: 'Developer', extraStatus: 'Tester', avatarImg: avatarImg }
    ],
    UserPosted: [
        { id: 1, Time: '12:00', avatarImg: avatarImg2, like: 192, message: 51, name: 'Hentai is good !', descr: 'Hentai <3!', image: 'https://www.wallpaperhi.com/thumbnails/detail/20120131/fatestay%20night%20ecchi%20saber%201600x1200%20wallpaper_www.wallpaperhi.com_26.jpg' }
    ],
    MyPosts: [
        // { id: 1, Time: '9:00', avatarImg: avatarImg, like: 0, message: 0, name: 'Hentai Hentaiovic', descr: 'Hentai <3!', image: '' }
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
                UserPosted: [...state.UserPosted, newPost],
                MyPosts: [...state.MyPosts, newPost]
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

export const addPost = (text) => ({ type: ADD_POST, newText: text });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, updateText: text });