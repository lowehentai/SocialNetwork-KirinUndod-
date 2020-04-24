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

const Page = (props) => {
    let ContentMap = props.Info.Dat_MediaMenu.Dat_UsersInfo.map(el => <Content name={el.name} descr={el.descr} image={el.image} like={el.like} message={el.message} />),
        HomeComponentMap = props.Info.Dat_Users.Dat_Information.map(el => <HomeComponent img={el.avatar} />),
        HomeUsersComponentMap = props.Info.Dat_Users.Dat_Information.map(el => <HomeUsersComponent name={el.name} />);
    return (
        <Router>
            <div className={PageStyle.Page}>
                <div className={PageStyle.container}>
                    <div className={PageStyle.Left}>
                        <QuickAccess Info={props.Info.Dat_QuickAccess.Dat_Button} />
                    </div>
                    <div className={PageStyle.Center}>
                        <Route path='/main'>
                            <CommentInput />
                            {ContentMap}
                        </Route>
                        <Route path='/home'>
                            {HomeComponentMap}
                        </Route>
                        <Route path='/message'>
                            <MessageComponent />
                        </Route>
                    </div>
                    <div className={PageStyle.Right}>
                        <Route path='/main'>
                            <MediaMenu Info={props.Info.Dat_MediaMenu.Dat_Button} />
                        </Route>
                        <Route path='/home'>
                            {HomeUsersComponentMap}
                        </Route>
                        <Route path='/message'>
                            <MessageTypeBlock Info={props.Info.Dat_Message.Dat_MessageType}/>
                        </Route>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Page;