import React from 'react';
import { a } from 'react-router-dom';
//Style Import
import HomeUserStyle from './HomeUsersComponent.module.css';
//Icons Import 
import myFacebook from '../../assest/Icons/facebook.svg';
import myGithub from '../../assest/Icons/github.svg';
// import myReact from '../../assest/Icons/react.svg';
// import mySteam from '../../assest/Icons/steam.svg';
// import myTelegram from '../../assest/Icons/telegram.svg';
// import myTwitch from '../../assest/Icons/twitch.svg';
// import myWhatsapp from '../../assest/Icons/whatsapp.svg';
import myTwitter from '../../assest/Icons/twitter.svg';
import myVk from '../../assest/Icons/vk.svg';
import myYoutube from '../../assest/Icons/youtube.svg';
import myInstagram from '../../assest/Icons/instagram.svg';

let HomeUsersComponent = (props) => {
    return (
        <div className={HomeUserStyle.HomeUsersComponent}>
            <div className={HomeUserStyle.block}>
                <div className={HomeUserStyle.UsersName}>
                    {props.Profile.fullName}
                </div>
                <div className={HomeUserStyle.StatusInput}>
                    {props.Profile.aboutMe}
                </div>
                <div className={HomeUserStyle.contactsWrapper}>
                    <div className={HomeUserStyle.contacts}>
                        <a href={props.Profile.contacts.facebook} className={!props.Profile.contacts.facebook ? HomeUserStyle.hidden : HomeUserStyle.linkContact} target='_blank'>
                            <img src={myFacebook} className={HomeUserStyle.icons} />
                        </a>
                        <a href={props.Profile.contacts.github} className={!props.Profile.contacts.github ? HomeUserStyle.hidden : HomeUserStyle.linkContact} target='_blank'>
                            <img src={myGithub} className={HomeUserStyle.icons} />
                        </a>
                        <a href={props.Profile.contacts.twitter} className={!props.Profile.contacts.twitter ? HomeUserStyle.hidden : HomeUserStyle.linkContact} target='_blank'>
                            <img src={myTwitter} className={HomeUserStyle.icons} />
                        </a>
                        <a href={props.Profile.contacts.vk} className={!props.Profile.contacts.vk ? HomeUserStyle.hidden : HomeUserStyle.linkContact} target='_blank'>
                            <img src={myVk} className={HomeUserStyle.icons} />
                        </a>

                        <a href={props.Profile.contacts.youtube} className={!props.Profile.contacts.youtube ? HomeUserStyle.hidden : HomeUserStyle.linkContact} target='_blank'>
                            <img src={myYoutube} className={HomeUserStyle.icons} />
                        </a>
                        <a href={props.Profile.contacts.instagram} className={!props.Profile.contacts.instagram ? HomeUserStyle.hidden : HomeUserStyle.linkContact} target='_blank'>
                            <img src={myInstagram} className={HomeUserStyle.icons} />
                        </a>
                        {/* <a href={props.Profile.contacts.facebook} className={!props.Profile.contacts.facebook ? HomeUserStyle.hidden : HomeUserStyle.linkContact} target='_blank'>
                            <img src={myReact} className={HomeUserStyle.icons} />
                        </a>
                        <a href={props.Profile.contacts.facebook} className={!props.Profile.contacts.facebook ? HomeUserStyle.hidden : HomeUserStyle.linkContact} target='_blank'>
                            <img src={mySteam} className={HomeUserStyle.icons} />
                        </a>
                        <a href={props.Profile.contacts.facebook} className={!props.Profile.contacts.facebook ? HomeUserStyle.hidden : HomeUserStyle.linkContact} target='_blank'>
                            <img src={myTelegram} className={HomeUserStyle.icons} />
                        </a>
                        <a href={props.Profile.contacts.facebook} className={!props.Profile.contacts.facebook ? HomeUserStyle.hidden : HomeUserStyle.linkContact} target='_blank'>
                            <img src={myTwitch} className={HomeUserStyle.icons} />
                        </a>
                        <a href={props.Profile.contacts.facebook} className={!props.Profile.contacts.facebook ? HomeUserStyle.hidden : HomeUserStyle.linkContact} target='_blank'>
                            <img src={myWhatsapp} className={HomeUserStyle.icons} />
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeUsersComponent;