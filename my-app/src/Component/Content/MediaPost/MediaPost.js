import React from 'react';
//Style Module Import
import MediaPostStyle from './MediaPost.module.css';

class MediaPost extends React.Component {
    render() {
        return (
            <div className={MediaPostStyle.MediaPost}>
                <div className={MediaPostStyle.block}>
                    <img src={this.props.UsersImage}></img>
                </div>
            </div>
        );
    }
}

export default MediaPost;