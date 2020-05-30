import React from 'react';
import HomeComponent from '../HomeComponent/HomeComponent.js';
import HomeUsersComponent from '../HomeUsersComponent/HomeUsersComponent.js';
import CommentInputContainer from '../CommentInput/CommentInputContainer.jsx';
import ProfileStyle from './Profile.module.css';
import Preloader from '../Common/Preloader/Preloader.js';
import Content from '../Content/Content.js';


let Profile = (props) => {
    let MyPostsa = props.MyPosts.map(el => <Content key={el.id} name={el.name} descr={el.descr} image={el.image} like={el.like} message={el.message} Time={el.Time} avatarImg={el.avatarImg} />).reverse();
    if (!props.Profile) {
        return <Preloader />
    }
    return (
        <div className={ProfileStyle.Profile}>
            <div className={ProfileStyle.container}>
                <div className={ProfileStyle.Left}>
                    <HomeComponent Profile={props.Profile} />
                </div>
                <div className={ProfileStyle.Right}>
                    <HomeUsersComponent Profile={props.Profile} />
                    <CommentInputContainer />
                    {!props.MyPosts ? <Preloader /> : MyPostsa}
                </div>
            </div>
        </div>
    );
}

export default Profile;