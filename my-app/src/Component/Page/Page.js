import React from 'react';
//Router Import
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Module Import
import PageStyle from './Page.module.css';
//Commonent Import
import QuickAccess from '../QuickAccess/QuickAccess.js';
import CommentInputContainer from '../CommentInput/CommentInputContainer.js';
import MediaMenu from '../MediaMenu/MediaMenu.js';
import MessageComponent from '../MessageComponent/MessageComponent';
import MessageTypeBlock from '../MessageTypeBlock/MessageTypeBlock.js';
import DialogsContainer from '../Dialogs/DialogsContainer.js';

const Page = (props) => {
    return (
        <Router>
            <div className={PageStyle.Page}>
                <div className={PageStyle.container}>
                    <div className={PageStyle.Left}>
                        <QuickAccess Info={props.Info.PropsInfo.QuickAccess.Puncts} />
                    </div>
                    <div className={PageStyle.Center}>
                        <Route path='/lok/main'>
                            <CommentInputContainer store={props.Info} dispatch={props.dispatch} />
                            {props.ContentMap}
                        </Route>
                        <Route path='/lok/home'>
                            {props.HomeComponentMap}
                        </Route>
                        <Route exact path='/lok/message'>
                            <MessageComponent Info={props.Info.PropsInfo.MessagesBlock.UserDialogBlock} />
                        </Route>
                        <Route path='/lok/message/1'>
                            <DialogsContainer store={props.Info} dispatch={props.dispatch} />
                        </Route>
                    </div>
                    <div className={PageStyle.Right}>
                        <Route path='/lok/main'>
                            <MediaMenu Info={props.Info.PropsInfo.MediaMenu.Puncts} />
                        </Route>
                        <Route path='/lok/home'>
                            {props.HomeUsersComponentMap}
                        </Route>
                        <Route path='/lok/message'>
                            <MessageTypeBlock Info={props.Info.PropsInfo.MessageType.Puncts} />
                        </Route>
                    </div>
                </div>
            </div>
        </Router>
    );
}


export default Page;

