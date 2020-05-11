import React from 'react';
//Router Import 
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Import -- Import Log.module.css
import HeaderStyle from './CompHeader.module.css';

function CompHeader(props) {
    let myName = props.Info.map(element => [element.name]),
        myAvatar = props.Info.map(element => [element.avatarImg]),
        Status = props.Info.map(element => [element.status]),
        ExtraStatus = props.Info.map(element => [element.extraStatus]);
    return (
        <Router>
            <div className={HeaderStyle.Header}>
                <div className={HeaderStyle.container}>
                    <div className={HeaderStyle.wrapper}>
                        <div className={HeaderStyle.logo}>{props.Social.Name}<span className={HeaderStyle.version}>{props.Social.Version}</span></div>
                        <Route path='/'>
                            <div className={HeaderStyle.search}>
                                <img className={HeaderStyle.img} src={require('../All_Icons/Vectorlup.png')} alt="search"></img>
                                <div className={HeaderStyle.InputWrapper}>
                                    <input type="text" name="search" placeholder="Search"></input>
                                </div>
                            </div>
                            <div className={HeaderStyle.buttons}>
                                <button className={HeaderStyle.button}>
                                    <img src={require('../All_Icons/Vectorbell.png')} alt="notification"></img>
                                </button>
                            </div>
                            <div className={HeaderStyle.users}>
                                <div className={HeaderStyle.users_name}>
                                    {myName}
                                    <div className={HeaderStyle.Privilege}>
                                        <span className={HeaderStyle.Status}>
                                            {Status}
                                        </span>
                                        <span className={HeaderStyle.ExtraStatus}>
                                            {ExtraStatus}
                                        </span>
                                    </div>
                                </div>
                                <div className={HeaderStyle.users_avatar}>
                                    <img src={myAvatar} alt="IconAvatar"></img>
                                </div>
                            </div>
                        </Route>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default CompHeader;