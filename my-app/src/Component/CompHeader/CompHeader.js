import React from 'react';
//Router Import 
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Import -- Import Log.module.css
import HeaderStyle from './CompHeader.module.css';
import LogStyle from '../LogPage/Log/Log.module.css';


function CompHeader(props) {
    let myName = props.Info.map(element => [element.name]),
        myAvatar = props.Info.map(element => [element.avatarImg]),
        Status = props.Info.map(element => [element.status]),
        ExtraStatus = props.Info.map(element => [element.extraStatus]),
        searchLine = window.location,
        isBackground;
    if (searchLine.hash === '#log&singIn' || searchLine.hash === '#log&create') {
        isBackground = true;
    } else {
        isBackground = false;
    }

    return (
        <Router>
            <div style={{ backgroundColor: isBackground ? '#000000a2' : '#404040' }} className={HeaderStyle.Header}>
                <div className={HeaderStyle.container}>
                    <div className={HeaderStyle.wrapper}>
                        <div className={HeaderStyle.logo}>KirinUndod<span className={HeaderStyle.version}>Unit V1.6</span></div>
                        <Route path='/prot'>
                            <div className={HeaderStyle.search}>
                                <img className={HeaderStyle.img} src={require('../All_Icons/Vectorlup.png')}></img>
                                <form method="POST">
                                    <input type="text" name="search" placeholder="Search"></input>
                                </form>
                            </div>
                            <div className={HeaderStyle.buttons}>
                                <button className={HeaderStyle.button}>
                                    <img src={require('../All_Icons/Vectorbell.png')}></img>
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
                                    <img src={myAvatar}></img>
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