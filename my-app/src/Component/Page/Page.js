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
import UsersContainer from '../Users/UsersContainer.js';

class Page extends React.Component {
    render() {
        return (
            <Router>
                <div className={PageStyle.Page}>
                    <div className={PageStyle.container}>
                        <div className={PageStyle.Left}>
                            <QuickAccess Info={this.props.Info.PropsInfo.QuickAccess.Puncts} />
                        </div>
                        <div className={PageStyle.Center}>
                            <Route path='/lok/main'>
                                <CommentInputContainer store={this.props.Info} dispatch={this.props.dispatch} />
                                {this.props.ContentMap}
                            </Route>
                            <Route path='/lok/home'>
                                {this.props.HomeComponentMap}
                            </Route>
                            <Route exact path='/lok/message'>
                                <MessageComponent Info={this.props.Info.PropsInfo.MessagesBlock.UserDialogBlock} />
                            </Route>
                            <Route path='/lok/message/1'>
                                <DialogsContainer store={this.props.Info} dispatch={this.props.dispatch} />
                            </Route>
                            <Route path='/lok/users'>
                                <UsersContainer />
                            </Route>
                        </div>
                        <div className={PageStyle.Right}>
                            <Route path='/lok/main'>
                                <MediaMenu Info={this.props.Info.PropsInfo.MediaMenu.Puncts} />
                            </Route>
                            <Route path='/lok/home'>
                                {this.props.HomeUsersComponentMap}
                            </Route>
                            <Route path='/lok/message'>
                                <MessageTypeBlock Info={this.props.Info.PropsInfo.MessageType.Puncts} />
                            </Route>
                            <Route path='/lok/users'>
                                <MessageTypeBlock Info={this.props.Info.PropsInfo.UsersType.Puncts} />
                            </Route>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Page;

