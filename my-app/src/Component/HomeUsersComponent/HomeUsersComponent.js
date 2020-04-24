import React from 'react';
//Style Import
import HomeUsersComponentStyle from './HomeUsersComponent.module.css';

const HomeUsersComponent = (props) => {
    return (
        <div className={HomeUsersComponentStyle.HomeUsersComponent}>
            <div className={HomeUsersComponentStyle.block}>
                <div className={HomeUsersComponentStyle.UsersName}>
                    {props.name}
                </div>
                <div className={HomeUsersComponentStyle.StatusInput}>
                    <form method="POST">
                        <textarea rows="4"  className={HomeUsersComponentStyle.input} type="text" placeholder="Status"></textarea>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HomeUsersComponent;