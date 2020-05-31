import avatarImg from '../assest/images/2.jpg';

const SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_LOADING = 'SET_LOADING';

let initialState = {
    Information: [
        { id: 1, name: 'Hentai Hentaiovic', status: 'Developer', extraStatus: 'Tester', avatarImg: avatarImg }
    ],
    profile: null,
    isLoading: false
};
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_LOADING: {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading });

export default ProfileReducer;