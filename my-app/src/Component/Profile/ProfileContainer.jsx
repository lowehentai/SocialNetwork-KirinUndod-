import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/Profile-reducer.js'
import Profile from './Profile.js';
class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return <>
            <Profile {...this.props} Profile={this.props.Profile} MyPosts={this.props.MyPosts}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    Profile: state.Profile.profile,
    MyPosts: state.CommentInput.MyPosts
});

let mapDispatchToProps = {
    setUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);