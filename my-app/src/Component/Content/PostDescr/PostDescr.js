import React from 'react';
//Style Module Import
import PostDescrStyle from './PostDescr.module.css';

const PostDescr = (props) => {
    return (
        <div className={PostDescrStyle.PostDescr}>
            <div className={PostDescrStyle.block}>
                {props.UsersDescr}
            </div>
        </div>
    );
}

export default PostDescr;