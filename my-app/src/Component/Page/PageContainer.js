import React from 'react';
import { connect } from 'react-redux';
//Commonent Import
import Page from './Page.js';
import Content from '../Content/Content.js';
import HomeComponent from '../HomeComponent/HomeComponent.js';
import HomeUsersComponent from '../HomeUsersComponent/HomeUsersComponent.js';


let MyStateToProps = (state) => {
    debugger;
    let ContentMap = state.CommentInput.UsersPosted.UserPosted.map(el => <Content name={el.name} descr={el.descr} image={el.image} like={el.like} message={el.message} Time={el.Time} avatarImg={el.avatarImg} />).reverse(),
        HomeComponentMap = state.CommentInput.User.Information.map(el => <HomeComponent avatarImg={el.avatarImg} />),
        HomeUsersComponentMap = state.CommentInput.User.Information.map(el => <HomeUsersComponent name={el.name} />);
    return {
        ContentMap: ContentMap,
        HomeComponentMap: HomeComponentMap,
        HomeUsersComponentMap: HomeUsersComponentMap,
        Info: state
    }
}

const PageContainer = connect(MyStateToProps)(Page);
export default PageContainer;

