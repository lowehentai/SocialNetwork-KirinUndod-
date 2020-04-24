import React from 'react';
//Style Module Import
import PostUsersInfoStyle from './PostUsersInfo.module.css';

const PostUsersInfo = (props) => {
    return (
        <div className={PostUsersInfoStyle.PostUsersInfo}>
            <div className={PostUsersInfoStyle.block}>
                <img src={require('../../All_Icons/Vectoravatar.png')} className={PostUsersInfoStyle.img}></img>
                {/* <img className={PostUsersInfoStyle.img} src=""></img> */}
                <div className={PostUsersInfoStyle.UsersName_block}>
                    {/* Users Name Block Use the DataBase */}
                    <div className={PostUsersInfoStyle.descr}>
                        {props.UsersName}
                    </div>
                    <span className={PostUsersInfoStyle.TimeSetPostData}>
                        12:00
                    </span>
                </div>
                <button className={PostUsersInfoStyle.btn}>
                    <img src={require('../../All_Icons/Vectorsettings.png')}></img>
                </button>
            </div>
        </div>
    );
}

export default PostUsersInfo;