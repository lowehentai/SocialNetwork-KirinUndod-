import React from 'react';
//Style Import 
import UsersStyle from './Users.module.css';
import userPhoto from '../../assest/images/1.jpg';

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
                            <div className={UsersStyle.UsersImg}>
                                <img src={el.photos.small != null ? el.photos.small : userPhoto} />
                            </div>
                            <div className={UsersStyle.UsersInfo}>
                                <div className={UsersStyle.UsersName}>
                                    {el.name}
                                </div>
                                <div className={UsersStyle.UsersStatus}>{el.status != null ? el.status : ''}</div>
                            </div>
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