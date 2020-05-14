import React from 'react';
//Style Module Import
import PostDescrStyle from './PostDescr.module.css';

class PostDescr extends React.Component {
    render() {
        return (
            <div className={PostDescrStyle.PostDescr}>
                <div className={PostDescrStyle.block}>
                    {this.props.UsersDescr}
                </div>
            </div>
        );
    }
}

export default PostDescr;