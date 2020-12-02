const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
     users: []
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
};
export const followAC = (userID) => ({type: FOLLOW, userID});      ///<------ return { type: FOLLOW }
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer