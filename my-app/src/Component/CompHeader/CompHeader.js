import React from 'react';
//Router Import 
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Style Import 
import HeaderStyle from './CompHeader.module.css';

class CompHeader extends React.Component {
    myName = this.props.Info.map(element => [element.name]);
    myAvatar = this.props.Info.map(element => [element.avatarImg]);
    Status = this.props.Info.map(element => [element.status]);
    ExtraStatus = this.props.Info.map(element => [element.extraStatus]);
    render() {
        return (
            <Router>
                <div className={HeaderStyle.Header}>
                    <div className={HeaderStyle.container}>
                        <div className={HeaderStyle.wrapper}>
                            <div className={HeaderStyle.logo}>{this.props.Social.Name}<span className={HeaderStyle.version}>{this.props.Social.Version}</span></div>
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
                                        {this.myName}
                                        <div className={HeaderStyle.Privilege}>
                                            <span className={HeaderStyle.Status}>
                                                {this.Status}
                                            </span>
                                            <span className={HeaderStyle.ExtraStatus}>
                                                {this.ExtraStatus}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={HeaderStyle.users_avatar}>
                                        <img src={this.myAvatar} alt="IconAvatar"></img>
                                    </div>
                                </div>
                            </Route>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default CompHeader;