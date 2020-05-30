import React from 'react';
import HomeComponent from '../HomeComponent/HomeComponent.js';
import HomeUsersComponent from '../HomeUsersComponent/HomeUsersComponent.js';
import CommentInputContainer from '../CommentInput/CommentInputContainer.jsx';
import ProfileStyle from './Profile.module.css';

let Profile = (props) => {
    let Home = props.HomeComponentMap.map(el => <HomeComponent avatarImg={el.avatarImg}/>)
    let HomeUsers = props.HomeUsersComponentMap.map(el => <HomeUsersComponent name={el.name}/>)
    return (
        <div className={ProfileStyle.Profile}>
            <div className={ProfileStyle.container}>
                <div className={ProfileStyle.Left}>
                    {Home}
                </div>
                <div className={ProfileStyle.Right}>
                    {HomeUsers}
                    <CommentInputContainer />
                    {props.MyPost}
                </div>
            </div>
        </div>
    );
}

export default Profile;