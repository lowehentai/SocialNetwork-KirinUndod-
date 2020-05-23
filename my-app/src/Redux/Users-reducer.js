const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';

let initialState = {
    Users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                Users: state.Users.map(el => {
                    if (el.id === action.userId) {
                        return { ...el, followed: true }
                    }
                    return el;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                Users: state.Users.map(el => {
                    if (el.id === action.userId) {
                        return { ...el, followed: false }
                    }
                    return el;
                })
            }
        case SET_USERS:
            return {
                ...state, Users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        default:
            return state;
    }
}

export default UsersReducer;

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setUsersCurrentAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCountAC = (setUsersTotalCount) => ({ type: SET_USERS_TOTAL_COUNT, count: setUsersTotalCount });
