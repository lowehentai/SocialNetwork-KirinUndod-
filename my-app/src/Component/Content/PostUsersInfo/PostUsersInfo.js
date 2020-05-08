import React from 'react';
//Style Module Import
import PostUsersInfoStyle from './PostUsersInfo.module.css';

const PostUsersInfo = (props) => {
    return (
        <div className={PostUsersInfoStyle.PostUsersInfo}>
            <div className={PostUsersInfoStyle.block}>
                <div className={PostUsersInfoStyle.img}>
                    <img src={props.avatarImg} alt="Avatar"></img>
                </div>
                <div className={PostUsersInfoStyle.UsersName_block}>
                    {/* Users Name Block Use the DataBase */}
                    <div className={PostUsersInfoStyle.descr}>
                        {props.UsersName}
                    </div>
                    <span className={PostUsersInfoStyle.TimeSetPostData}>
                        {props.Time}
                    </span>
                </div>
                <button className={PostUsersInfoStyle.btn}>
                    <img src={require('../../All_Icons/Vectorsettings.png')} alt="settings Icon"></img>
                </button>
            </div>
        </div >
    );
}

export default PostUsersInfo;