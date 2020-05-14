import React from 'react';
//Style Import
import HomeComponentStyle from './HomeComponent.module.css';

class HomeComponent extends React.Component {
    render() {
        return (
            <div className={HomeComponentStyle.HomeComponent}>
                <div className={HomeComponentStyle.block}>
                    <div className={HomeComponentStyle.img}>
                        <img src={this.props.avatarImg} alt='IconAvatar'></img>
                    </div>
                    <div className={HomeComponentStyle.button_wrapper}>
                        <button className={HomeComponentStyle.editProfile}>
                            Edit Profile
                        </button>
                        <button className={HomeComponentStyle.settings}>
                            <span className={HomeComponentStyle.span} ></span>
                            <span className={HomeComponentStyle.span} ></span>
                            <span className={HomeComponentStyle.span} ></span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;