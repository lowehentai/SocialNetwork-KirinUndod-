import React from 'react';
//Style Module Import
import ContentStyle from './Content.module.css';
//Component Import
import PostUsersInfo from './PostUsersInfo/PostUsersInfo.js';
import PostDescr from './PostDescr/PostDescr.js';
import MediaPost from './MediaPost/MediaPost.js';
import Interactive from './Interactive/Interactive.js';

const Content = (props) => {
    return (
        <div className={ContentStyle.Content}>
            <div className={ContentStyle.block}>
                <div className={ContentStyle.PostUsersInfo}>
                    <PostUsersInfo UsersName={props.name} />
                    <span className={ContentStyle.TimePost}>
                        {/* time selecteded function */}
                    </span>
                </div>
                <div className={ContentStyle.PostDescr}>
                    <PostDescr UsersDescr={props.descr} />
                </div>
                <div className={ContentStyle.MediaPost}>
                    <MediaPost UsersImage={props.image} />
                </div>
                <div className={ContentStyle.Interactive}>
                    <Interactive Like={props.like}  Message={props.message} />
                </div>
            </div>
        </div>
    );
}

export default Content;