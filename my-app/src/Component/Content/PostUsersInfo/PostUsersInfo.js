import React from 'react';
//Style Module Import
import PostUsersInfoStyle from './PostUsersInfo.module.css';

class PostUsersInfo extends React.Component {
    render() {
        return (
            <div className={PostUsersInfoStyle.PostUsersInfo}>
                <div className={PostUsersInfoStyle.block}>
                    <div className={PostUsersInfoStyle.img}>
                        <img src={this.props.avatarImg} alt="Avatar"></img>
                    </div>
                    <div className={PostUsersInfoStyle.UsersName_block}>
                        <div className={PostUsersInfoStyle.descr}>
                            {this.props.UsersName}
                        </div>
                        <span className={PostUsersInfoStyle.TimeSetPostData}>
                            {this.props.Time}
                        </span>
                    </div>
                    <button className={PostUsersInfoStyle.btn}>
                        <img src={require('../../All_Icons/Vectorsettings.png')} alt="settings Icon"></img>
                    </button>
                </div>
            </div >
        );
    }
}

export default PostUsersInfo;