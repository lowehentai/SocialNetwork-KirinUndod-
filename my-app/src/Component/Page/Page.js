import React from 'react';
//Router Import
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Module Import
import PageStyle from './Page.module.css';
//Commonent Import
import QuickAccess from '../QuickAccess/QuickAccess.js';
import CommentInput from '../CommentInput/CommentInput.js';
import MediaMenu from '../MediaMenu/MediaMenu.js';
import Content from '../Content/Content.js';
import HomeComponent from '../HomeComponent/HomeComponent.js';
import HomeUsersComponent from '../HomeUsersComponent/HomeUsersComponent.js';
import MessageComponent from '../MessageComponent/MessageComponent';
import MessageTypeBlock from '../MessageTypeBlock/MessageTypeBlock.js';
import Dialogs from '../Dialogs/Dialogs.js';

const Page = (props) => {
    let ContentMap = props.Info.CommentInput.UsersPosted.UserPosted.map(el => <Content name={el.name} descr={el.descr} image={el.image} like={el.like} message={el.message} Time={el.Time} avatarImg={el.avatarImg} />).reverse(),
        HomeComponentMap = props.Info.CommentInput.User.Information.map(el => <HomeComponent avatarImg={el.avatarImg} />),
        HomeUsersComponentMap = props.Info.CommentInput.User.Information.map(el => <HomeUsersComponent name={el.name} />);
    return (
        <Router>
            <div className={PageStyle.Page}>
                <div className={PageStyle.container}>
                    <div className={PageStyle.Left}>
                        <QuickAccess Info={props.Info.PropsInfo.QuickAccess.Puncts} />
                    </div>
                    <div className={PageStyle.Center}>
                        <Route path='/main'>
                            <CommentInput Info={props.Info.CommentInput.UsersPosted} dispatch={props.dispatch} />
                            {ContentMap}
                        </Route>
                        <Route path='/home'>
                            {HomeComponentMap}
                        </Route>
                        <Route exact path='/message'>
                            <MessageComponent Info={props.Info.PropsInfo.MessagesBlock.UserDialogBlock} />
                        </Route>
                        <Route path='/message/1'>
                            <Dialogs Info={props.Info.Dialogs.UserMessage} dispatch={props.dispatch}/>
                        </Route>
                    </div>
                    <div className={PageStyle.Right}>
                        <Route path='/main'>
                            <MediaMenu Info={props.Info.PropsInfo.MediaMenu.Puncts} />
                        </Route>
                        <Route path='/home'>
                            {HomeUsersComponentMap}
                        </Route>
                        <Route path='/message'>
                            <MessageTypeBlock Info={props.Info.PropsInfo.MessageType.Puncts} />
                        </Route>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Page;