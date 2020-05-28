import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setUsersCurrentAC, setUsersTotalCountAC } from '../../Redux/Users-reducer.js';
import Users from './Users.js';

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.Users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.setUsersCurrent(pageNumber);//Query String Parameters
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    // componentDidMount() {
    //     if (this.props.users.Users.length === 0) {
    //         axios.get(`https://analytics.kirinundod.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {//Yeah Baby It's my Server :)!
    //             this.props.setUsers(response.data.users);
    //             this.props.setUsersTotalCount(response.data.totalCount);
    //         });
    //     }
    // }
    // onPageChanged = (pageNumber) => {
    //     this.props.setUsersCurrent(pageNumber);//Query String Parameters
    //     axios.get(`https://analytics.kirinundod.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {//My Server ・_・
    //         this.props.setUsers(response.data.items);
    //     });
    // }

    render() {
        return <Users
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
        />
    }
}

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

export default connect(MyStateToProps, mapDispatchToProps)(UsersContainer);