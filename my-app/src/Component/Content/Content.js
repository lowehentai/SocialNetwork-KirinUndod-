import React from 'react';
//Style Module Import
import ContentStyle from './Content.module.css';
//Component Import
import PostUsersInfo from './PostUsersInfo/PostUsersInfo.js';
import PostDescr from './PostDescr/PostDescr.js';
import MediaPost from './MediaPost/MediaPost.js';
import Interactive from './Interactive/Interactive.js';

class Content extends React.Component {
    render() {
        return (
            <div className={ContentStyle.Content}>
                <div className={ContentStyle.block}>
                    <div className={ContentStyle.PostUsersInfo}>
                        <PostUsersInfo UsersName={this.props.name} Time={this.props.Time} avatarImg={this.props.avatarImg} />
                    </div>
                    <div className={ContentStyle.PostDescr}>
                        <PostDescr UsersDescr={this.props.descr} />
                    </div>
                    <div className={ContentStyle.MediaPost}>
                        <MediaPost UsersImage={this.props.image} />
                    </div>
                    <div className={ContentStyle.Interactive}>
                        <Interactive Like={this.props.like} Message={this.props.message} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;