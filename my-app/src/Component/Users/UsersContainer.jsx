import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setUsersCurrent, setUsersTotalCount, toggleIsFetching } from '../../Redux/Users-reducer.js';
import Users from './Users.js';
import Preloader from '../Common/Preloader/Preloader.js';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.Users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setUsersCurrent(pageNumber);//Query String Parameters
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
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
    //     this.props.setUsersCurrent(pageNumber);
    //     axios.get(`https://analytics.kirinundod.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {//My Server ・_・
    //         this.props.setUsers(response.data.items);
    //     });
    // }

    render() {
        return <>
            <Users
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
            />
            {this.props.users.isFetching ? <Preloader /> : null}
        </>
    }
}

let MyStateToProps = (state) => {
    return {
        users: state.Users,
        pageSize: state.Users.pageSize,
        totalUsersCount: state.Users.totalUsersCount,
        currentPage: state.Users.currentPage,
        isFetching: state.isFetching
    }
}

//Alternative method write code 
let mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setUsersCurrent,
    setUsersTotalCount,
    toggleIsFetching
}

export default connect(MyStateToProps, mapDispatchToProps)(UsersContainer);