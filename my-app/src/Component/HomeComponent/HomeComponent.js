import React from 'react';
import NoPhoto from '../../assest/images/NoPhoto.jpg';
//Style Import
import HomeComponentStyle from './HomeComponent.module.css';

let HomeComponent = (props) => {
    return (
        <div className={HomeComponentStyle.HomeComponent}>
            <div className={HomeComponentStyle.block}>
                <div className={HomeComponentStyle.img}>
                    <img src={props.Profile.photos.large != null ? props.Profile.photos.large : NoPhoto} alt='IconAvatar'></img>
                </div>
                <div className={HomeComponentStyle.button_wrapper}>
                    <button className={HomeComponentStyle.editProfile}>
                        Edit Profile
                    </button>
                    <button className={HomeComponentStyle.settings}>
                        <span className={HomeComponentStyle.span}></span>
                        <span className={HomeComponentStyle.span}></span>
                        <span className={HomeComponentStyle.span}></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;