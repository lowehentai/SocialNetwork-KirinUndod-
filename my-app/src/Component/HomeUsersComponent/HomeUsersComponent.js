import React from 'react';
//Style Import
import HomeUsersComponentStyle from './HomeUsersComponent.module.css';

let HomeUsersComponent = (props) => {
    return (
        <div className={HomeUsersComponentStyle.HomeUsersComponent}>
            <div className={HomeUsersComponentStyle.block}>
                <div className={HomeUsersComponentStyle.UsersName}>
                    {props.Profile.fullName}
                </div>
                <div className={HomeUsersComponentStyle.StatusInput}>
                    {props.Profile.aboutMe}
                </div>
            </div>
        </div>
    );
}

export default HomeUsersComponent;