const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    Users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setUsersCurrent = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (setUsersTotalCount) => ({ type: SET_USERS_TOTAL_COUNT, count: setUsersTotalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default UsersReducer;
