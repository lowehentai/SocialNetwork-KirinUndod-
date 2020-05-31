import React from 'react';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserProfile, setLoading } from '../../Redux/Profile-reducer.js'
import Preloader from '../Common/Preloader/Preloader.js';
import Profile from './Profile.js';
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.setLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setLoading(false);
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader /> : null}
            <Profile {...this.props} Profile={this.props.Profile} MyPosts={this.props.MyPosts} />
        </>
    }
}

let mapStateToProps = (state) => ({
    Profile: state.Profile.profile,
    MyPosts: state.CommentInput.MyPosts,
    isLoading: state.Profile.isLoading
});

let mapDispatchToProps = {
    setUserProfile,
    setLoading
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);