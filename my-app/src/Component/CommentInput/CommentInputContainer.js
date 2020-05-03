import React from 'react';
//Style Module Import
import CommentInput from './CommentInput.js';
//Utility Import 
import { addPostCreatorAction, updateNewPostTextCreatorAction } from '../../Redux/CommentInput-reducer.js';
import StoreContext from '../../StoreContext.js';

const CommentInputContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let addPost = (text) => {
                    store.dispatch(addPostCreatorAction(text));
                };
                let updateNewPostText = (text) => {
                    store.dispatch(updateNewPostTextCreatorAction(text));
                };
                return <CommentInput addPost={addPost} updateNewPostText={updateNewPostText} Info={store.getState().CommentInput.UsersPosted.PostInput} />
            }}
        </StoreContext.Consumer>
    );
}

export default CommentInputContainer;