import React from 'react';
//Style Module Import
import CommentInputStyle from './CommentInput.module.css';

const CommentInput = (props) => {
    let newPostElemnt = React.createRef();

    let addPost = () => {
        let text = newPostElemnt.current.value;
        props.addPost(text);
    }

    let onPostChange = () => {
        let text = newPostElemnt.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={CommentInputStyle.CommentInput}>
            <div className={CommentInputStyle.block}>
                <div className={CommentInputStyle.avatarImage}>
                    <img src={require('../All_Icons/Vectoravatar.png')}></img>
                </div>
                {/* method="POST" */}
                <div>
                    <div className={CommentInputStyle.form}>
                        <input onChange={onPostChange} value={props.TestingU} ref={newPostElemnt} type="text" maxLength="450" placeholder="What's New?" className={CommentInputStyle.input}></input>
                        <button onClick={addPost} className={CommentInputStyle.SendButton}>
                            <img src={require('../All_Icons/.fas.fa-location-arrowsend.png')} className={CommentInputStyle.sendImg}></img>
                        </button>
                    </div>
                </div>
                <div className={CommentInputStyle.Icons}>
                    <img src={require('../All_Icons/Vectorcamera.png')}></img>
                    <img src={require('../All_Icons/Vectorvideo.png')}></img>
                    <img src={require('../All_Icons/Vectormuzic.png')}></img>
                </div>
            </div>
        </div>
    );
}

export default CommentInput;