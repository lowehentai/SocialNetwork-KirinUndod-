import React from 'react';
//Style Module Import
import CommentInputStyle from './CommentInput.module.css';
//Utility Import 

const CommentInput = (props) => {
    let newPostElement = React.createRef(),
        mediaPostElement = React.createRef(),
        onAdPost = () => {
            let text = newPostElement.current.value;
            props.addPost(text);
        },
        onPostChange = () => {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
        }
    return (
        <div className={CommentInputStyle.CommentInput}>
            <div className={CommentInputStyle.block}>
                <div className={CommentInputStyle.avatarImage}>
                    <img src={props.avatarImg}></img>
                </div>
                {/* method="POST" */}
                <div>
                    <div className={CommentInputStyle.form}>
                        <input onChange={onPostChange} value={props.Info} ref={newPostElement} type="text" maxLength="450" placeholder="What's New?" className={CommentInputStyle.input}></input>
                        <button onClick={onAdPost} className={CommentInputStyle.SendButton}>
                            <img src={require('../All_Icons/.fas.fa-location-arrowsend.png')} className={CommentInputStyle.sendImg}></img>
                        </button>
                    </div>
                </div>
                <div className={CommentInputStyle.Icons}>
                    <div className={CommentInputStyle.mediaLoad}>
                        <label>
                            <img src={require('../All_Icons/Vectorcamera.png')}></img>
                            <input ref={mediaPostElement} type="file" className={CommentInputStyle.mediaInput}></input>
                        </label>
                        <label>
                            <img src={require('../All_Icons/Vectorvideo.png')}></img>
                            <input type="file" className={CommentInputStyle.mediaInput}></input>
                        </label>
                        <label>
                            <img src={require('../All_Icons/Vectormuzic.png')}></img>
                            <input type="file" className={CommentInputStyle.mediaInput}></input>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentInput;