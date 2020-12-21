const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
// const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
    //     {
    //         id: 1,
    //         avatarUrl: 'https://ic.pics.livejournal.com/imit_omsu/66140468/454967/454967_800.jpg',
    //         followed: true,
    //         fullName: 'Anna',
    //         status: 'Uchis davay!!!!!!!!!!!!!!!!!',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: 2,
    //         avatarUrl: 'https://sun9-45.userapi.com/c847020/v847020977/1df81/fz46D74JsRQ.jpg?ava=1',
    //         followed: false,
    //         fullName: 'MAMA',
    //         status: 'Kogda uje na rabotu?',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: 3,
    //         avatarUrl: 'https://cs5.pikabu.ru/images/big_size_comm/2015-04_1/1428229475636.jpg',
    //         followed: false,
    //         fullName: 'PAPA',
    //         status: 'Mojet dalnoboishikom stanesh?',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     }
    // ],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
};
export const follow = (userID) => ({type: FOLLOW, userID});      ///<------ return { type: FOLLOW }
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer