import { combineReducers, createStore } from 'redux';
//Reducer Import
import CommentInputReducer from './CommentInput-reducer.js';
import DialogsReducer from './Dialog-reducer.js';
import PropsReducer from './Props-reducer.js';

let reducers = combineReducers({
    CommentInput: CommentInputReducer,
    Dialogs: DialogsReducer,
    PropsInfo: PropsReducer
});


let store = createStore(reducers);

export default store;