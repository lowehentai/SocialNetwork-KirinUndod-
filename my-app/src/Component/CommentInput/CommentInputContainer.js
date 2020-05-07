import React from 'react';
//Style Module Import
import CommentInput from './CommentInput.js';
//Utility Import 
import { addPostCreatorAction, updateNewPostTextCreatorAction } from '../../Redux/CommentInput-reducer.js';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {  
        Info: state.CommentInput.UsersPosted.PostInput,
        avatarImg: state.CommentInput.User.Information.map(el => [el.avatarImg])
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostCreatorAction(text));
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreatorAction(text));
        }
    }
}

const CommentInputContainer = connect(mapStateToProps, mapDispatchToProps)(CommentInput);

export default CommentInputContainer;