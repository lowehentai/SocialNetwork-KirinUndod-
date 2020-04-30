import { myTime } from '../Redux/State.js';

const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    ADD_TIME = 'ADD-TIME';


const CommentInputReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                Time: myTime(),
                avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp&usqp=CAU',
                like: 0,
                message: 0,
                name: state.User.Information.map(el => [el.name]),
                descr: state.UsersPosted.PostInput,
                image: ''
            };
            state.UsersPosted.UserPosted.push(newPost);
            state.UsersPosted.PostInput = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.UsersPosted.PostInput = action.newText;
            return state;
        default:
            return state;
    }
}


export default CommentInputReducer;

export const addPostCreatorAction = (text) => ({ type: ADD_POST, newText: text })
export const updateNewPostTextCreatorAction = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })