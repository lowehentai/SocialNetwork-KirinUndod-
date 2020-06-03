import React from 'react';
import { NavLink } from 'react-router-dom';
//Style Import 
import UsersStyle from './Users.module.css';
import NoPhoto from '../../assest/images/NoPhoto.jpg';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize),
        pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={UsersStyle.NumberButton}>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p && UsersStyle.SelectedButton} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                    })
                }
            </div>
            {
                props.users.Users.map(el =>
                    <div key={el.id}>
                        <div className={UsersStyle.Users}>
                            <NavLink to={'/lok/home/' + el.id} className={UsersStyle.UsersHomeRouterUrl}>
                                <div className={UsersStyle.UsersImg}>
                                    <img src={el.photos.small != null ? el.photos.small : NoPhoto} />
                                </div>
                                <div className={UsersStyle.UsersInfo}>
                                    <div className={UsersStyle.UsersName}>
                                        {el.name}
                                    </div>
                                    <div className={UsersStyle.UsersStatus}>{el.status != null ? el.status : ''}</div>
                                </div>
                            </NavLink>
                            <div className={UsersStyle.UsersButton}>
                                {el.followed
                                    ? <button onClick={() => { props.unfollow(el.id) }} className={`${UsersStyle.Button} ${UsersStyle.UnFollow}`}>Un Follow</button>
                                    : <button onClick={() => { props.follow(el.id) }} className={`${UsersStyle.Button} ${UsersStyle.Follow}`}>Follow</button>}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Users;