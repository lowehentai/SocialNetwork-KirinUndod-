import React from 'react';
import * as axios from 'axios';
//Style Import 
import UsersStyle from './Users.module.css';
import userPhoto from '../../assest/images/1.jpg';

class Users extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.users.Users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {//not my server :(
                this.props.setUsers(response.data.items);
            });
        }
    }
    render() {
        return <div>
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
                            <div className={UsersStyle.UsersStatus}>{el.status != null ? el.status : 'Undefined'}</div>
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


