import React from 'react';
//Style Import 
import UsersStyle from './Users.module.css';

const Users = (props) => {
    if (props.users.Users.length === 0) {
        props.setUsers([
            { id: 1, followed: false, fullName: 'Hentai Hentaiovic', DescrStatus: 'Developer', lastOnlineTime: '12:00', avatarImg: 'https://i.pinimg.com/736x/ed/ff/05/edff05cd201e80adb1c6b853557a675c.jpg', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, followed: true, fullName: 'Alexandr', DescrStatus: 'Hi Guys', lastOnlineTime: '12:00', avatarImg: 'https://i.pinimg.com/736x/ed/ff/05/edff05cd201e80adb1c6b853557a675c.jpg', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, followed: false, fullName: 'Developer too', DescrStatus: 'Testing DescrStatus', lastOnlineTime: '12:00', avatarImg: 'https://i.pinimg.com/736x/ed/ff/05/edff05cd201e80adb1c6b853557a675c.jpg', location: { city: 'Antalya', country: 'Turkey' } },
            { id: 4, followed: true, fullName: 'BestUsers', DescrStatus: 'I Love It (HK416, AK-12, AK-15, AN-94, JS9, NTW-20, M28A1, R93)', lastOnlineTime: '12:00', avatarImg: 'https://i.pinimg.com/736x/ed/ff/05/edff05cd201e80adb1c6b853557a675c.jpg', location: { city: 'Minsk', country: 'Belarus' } }
        ]
        );
    }
    return <div>
        {
            props.users.Users.map(el => <div key={el.id}>
                <div className={UsersStyle.Users}>
                    <div className={UsersStyle.UsersImg}>
                        <img src={el.avatarImg} />
                    </div>
                    <div className={UsersStyle.UsersInfo}>
                        <div className={UsersStyle.UsersName}>
                            {el.fullName}
                        </div>
                        <div className={UsersStyle.UsersStatus}>{el.DescrStatus}</div>
                    </div>
                    <div className={UsersStyle.UsersButton}>
                        {el.followed
                            ? <button onClick={() => { props.unfollow(el.id) }} className={`${UsersStyle.Button} ${UsersStyle.UnFollow}`}>Un Follow</button>
                            : <button onClick={() => { props.follow(el.id) }} className={`${UsersStyle.Button} ${UsersStyle.Follow}`}>Follow</button>}
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;