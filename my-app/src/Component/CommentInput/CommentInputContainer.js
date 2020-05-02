import React from 'react';
//Style Module Import
import CommentInput from './CommentInput.js';
//Utility Import 
import { addPostCreatorAction, updateNewPostTextCreatorAction } from '../../Redux/CommentInput-reducer.js';

const CommentInputContainer = (props) => {
    let addPost = (text) => {
        props.dispatch(addPostCreatorAction(text));
    };
    let updateNewPostText = (text) => {
        props.dispatch(updateNewPostTextCreatorAction(text));
    };

    return (
        <CommentInput addPost={addPost} updateNewPostText={updateNewPostText} Info={props.store.CommentInput.UsersPosted.PostInput} />
    );
}

export default CommentInputContainer;