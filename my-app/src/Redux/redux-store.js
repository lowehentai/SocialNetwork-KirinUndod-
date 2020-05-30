import { combineReducers, createStore } from 'redux';
//Reducer Import
import CommentInputReducer from './CommentInput-reducer.js';
import DialogsReducer from './Dialog-reducer.js';
import PropsReducer from './Props-reducer.js';
import UsersReducer from './Users-reducer.js';
import ProfileReducer from './Profile-reducer.js';

let reducers = combineReducers({
    CommentInput: CommentInputReducer,
    Dialogs: DialogsReducer,
    PropsInfo: PropsReducer,
    Users: UsersReducer,
    Profile: ProfileReducer
});

let store = createStore(reducers);
window.store = store;

export default store;