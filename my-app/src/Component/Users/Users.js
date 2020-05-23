import React from 'react';
import * as axios from 'axios';
//Style Import 
import UsersStyle from './Users.module.css';
import userPhoto from '../../assest/images/1.jpg';

class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.Users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {//not my server :(
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setUsersCurrent(pageNumber);//Query String Parameters
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {//not my server -_-
            this.props.setUsers(response.data.items);
        });
    }
    render() {

        let pagesCount = Math.ceil((this.props.totalUsersCount / 10) / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={this.props.users.Users.length !== 0 ? UsersStyle.NumberButton : UsersStyle.hidden}>

                {pages.map(p => {
                    return <span className={this.props.currentPage === p && UsersStyle.SelectedButton} onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
                })}

            </div>
            {
                this.props.users.Users.map(el => <div key={el.id}>
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
                                ? <button onClick={() => { this.props.unfollow(el.id) }} className={`${UsersStyle.Button} ${UsersStyle.UnFollow}`}>Un Follow</button>
                                : <button onClick={() => { this.props.follow(el.id) }} className={`${UsersStyle.Button} ${UsersStyle.Follow}`}>Follow</button>}
                        </div>
                    </div>
                </div>)
            }
        </div>
    }
}

export default Users;