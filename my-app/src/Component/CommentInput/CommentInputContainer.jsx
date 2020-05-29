//Style Module Import
import CommentInput from './CommentInput.js';
//Utility Import 
import { addPost, updateNewPostText } from '../../Redux/CommentInput-reducer.js';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        Info: state.CommentInput.PostInput,
        avatarImg: state.CommentInput.Information.map(el => [el.avatarImg]),
    }
}

let mapDispatchToProps = {
    addPost,
    updateNewPostText
}

const CommentInputContainer = connect(mapStateToProps, mapDispatchToProps)(CommentInput);

export default CommentInputContainer;