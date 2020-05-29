import React from 'react';
//Style Module Import
import CommentInputStyle from './CommentInput.module.css';

class CommentInput extends React.Component {
    newPostElement = React.createRef();
    mediaPostElement = React.createRef();

    onAdPost = () => {
        let text = this.newPostElement.current.value;
        this.props.addPost(text);
    }
    onPostChange = () => {
        let text = this.newPostElement.current.value;
        this.props.updateNewPostText(text);
    }
    render() {
        return (
            <div className={CommentInputStyle.CommentInput}>
                <div className={CommentInputStyle.block}>
                    <div className={CommentInputStyle.avatarImage}>
                        <img src={this.props.avatarImg}></img>
                    </div>
                    <div>
                        <div className={CommentInputStyle.form}>
                            <input onChange={this.onPostChange} value={this.props.Info} ref={this.newPostElement} type="text" maxLength="450" placeholder="What's New?" className={CommentInputStyle.input}></input>
                            <button onClick={this.onAdPost} className={CommentInputStyle.SendButton}>
                                <img src={require('../All_Icons/.fas.fa-location-arrowsend.png')} className={CommentInputStyle.sendImg}></img>
                            </button>
                        </div>
                    </div>
                    <div className={CommentInputStyle.Icons}>
                        <div className={CommentInputStyle.mediaLoad}>
                            <label>
                                <img src={require('../All_Icons/Vectorcamera.png')}></img>
                                <input ref={this.mediaPostElement} type="file" className={CommentInputStyle.mediaInput}></input>
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
}

export default CommentInput;