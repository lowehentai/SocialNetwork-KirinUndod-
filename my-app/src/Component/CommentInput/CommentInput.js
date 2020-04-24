import React from 'react';
//Style Module Import
import CommentInputStyle from './CommentInput.module.css';

const CommentInput = () => {
    return (
        <div className={CommentInputStyle.CommentInput}>
            <div className={CommentInputStyle.block}>
                <div className={CommentInputStyle.avatarImage}>
                    <img src={require('../All_Icons/Vectoravatar.png')}></img>
                </div>
                <from method="POST">
                    <input type="text" placeholder="What's New?" className={CommentInputStyle.input}></input>
                </from>
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