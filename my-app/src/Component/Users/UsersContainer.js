import React from 'react';

import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../Redux/Users-reducer.js';
import Users from './Users.js';

let MyStateToProps = (state) => {
    return {
        users: state.Users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(MyStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;