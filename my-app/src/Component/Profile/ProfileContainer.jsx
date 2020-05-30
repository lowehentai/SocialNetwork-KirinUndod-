import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile.js';
import Content from '../Content/Content.js';


let MyStateToProps = (state) => {
    let HomeComponentMap = state.CommentInput.Information,
        HomeUsersComponentMap = state.CommentInput.Information,
        MyPost = state.CommentInput.MyPosts.map(el => <Content key={el.id} name={el.name} descr={el.descr} image={el.image} like={el.like} message={el.message} Time={el.Time} avatarImg={el.avatarImg} />).reverse();
    return {
        HomeComponentMap: HomeComponentMap,
        HomeUsersComponentMap: HomeUsersComponentMap,
        MyPost: MyPost
    }
}

const PageContainer = connect(MyStateToProps)(Profile);

export default PageContainer;