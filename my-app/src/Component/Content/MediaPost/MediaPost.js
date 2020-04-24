import React from 'react';
//Style Module Import
import MediaPostStyle from './MediaPost.module.css';

const MediaPost = (props) => {
    return (
        <div className={MediaPostStyle.MediaPost}>
            <div className={MediaPostStyle.block}>
                <img src={props.UsersImage}></img>
            </div>
        </div>
    );
}

export default MediaPost;