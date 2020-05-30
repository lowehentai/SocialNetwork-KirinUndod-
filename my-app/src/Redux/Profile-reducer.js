import avatarImg from '../assest/images/2.jpg';

const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    Information: [
        { id: 1, name: 'Hentai Hentaiovic', status: 'Developer', extraStatus: 'Tester', avatarImg: avatarImg }
    ],
    PostInput: '',
    profile: null
};
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default ProfileReducer;
