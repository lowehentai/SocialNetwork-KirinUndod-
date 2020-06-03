import React from 'react';
import { connect } from 'react-redux';
//Commonent Import
import Page from './Page.js';
import Content from '../Content/Content.js';


let mapStateToProps = (state) => {
    let ContentMap = state.CommentInput.UserPosted.map(el => <Content key={el.id} name={el.name} descr={el.descr} image={el.image} like={el.like} message={el.message} Time={el.Time} avatarImg={el.avatarImg} />).reverse();
    return {
        ContentMap: ContentMap,
        Info: state
    }
}

const PageContainer = connect(mapStateToProps)(Page);

export default PageContainer;