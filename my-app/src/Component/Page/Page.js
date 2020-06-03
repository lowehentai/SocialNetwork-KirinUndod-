import React from 'react';
//Router Import
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Module Import
import PageStyle from './Page.module.css';
//Commonent Import
import QuickAccess from '../QuickAccess/QuickAccess.js';
import CommentInputContainer from '../CommentInput/CommentInputContainer.jsx';
import MediaMenu from '../MediaMenu/MediaMenu.js';
import MessageComponent from '../MessageComponent/MessageComponent';
import MessageTypeBlock from '../MessageTypeBlock/MessageTypeBlock.js';
import DialogsContainer from '../Dialogs/DialogsContainer.jsx';
import UsersContainer from '../Users/UsersContainer.jsx';
import ProfileContainer from '../Profile/ProfileContainer.jsx';

class Page extends React.Component {
    render() {
        return (
            <Router>
                <div className={PageStyle.Page}>
                    <div className={PageStyle.container}>

                        {/* Left Block */}

                        <div className={PageStyle.Left}>
                            <QuickAccess Info={this.props.Info.PropsInfo.QuickAccess.Puncts} />
                        </div>

                        {/* Center Block */}

                        <div className={PageStyle.Center}>
                            <Route path='/lok/main'>
                                <CommentInputContainer />
                                {this.props.ContentMap}
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

                        {/* Right Block */}

                        <div className={PageStyle.Right}>
                            <Route path='/lok/main'>
                                <MediaMenu Info={this.props.Info.PropsInfo.MediaMenu.Puncts} />
                            </Route>
                            <Route path='/lok/home/:userId?'>
                                <ProfileContainer />
                                {this.props.MyPost}
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