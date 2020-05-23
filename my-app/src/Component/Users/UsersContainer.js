import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setUsersCurrentAC, setUsersTotalCountAC } from '../../Redux/Users-reducer.js';
import Users from './Users.js';

let MyStateToProps = (state) => {
    return {
        users: state.Users,
        pageSize: state.Users.pageSize,
        totalUsersCount: state.Users.totalUsersCount,
        currentPage: state.Users.currentPage
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
        },
        setUsersCurrent: (pageNumber) => {
            dispatch(setUsersCurrentAC(pageNumber))
        },
        setUsersTotalCount: (pageNumber) => {
            dispatch(setUsersTotalCountAC(pageNumber))
        }
    }
}

const UsersContainer = connect(MyStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;