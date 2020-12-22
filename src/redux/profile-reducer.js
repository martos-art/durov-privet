const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
let initialState = {
    posts: [
        {id: 1, message: 'where is my mind?', likesCount: 707},
        {id: 2, message: 'wheeeeere is my mind?', likesCount: 1994},
        {id: 4, message: 'wheeeeere is myyyyyyyyyyyyy miiiiiiiiiiiiind?', likesCount: 1337}
    ],
    newPostText: "asdfafsdadsf",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ""
            };
        // let stateCopy = {...state};
        // stateCopy.posts = [...state.posts]
        // stateCopy.posts.unshift(newPost);
        // stateCopy.newPostText = "";
        // return stateCopy;
        case UPDATE_NEW_POST_TEXT: {
            // let stateCopy = {...state};
            // stateCopy.newPostText = action.newText;
            // return stateCopy;
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});///<------ return { type: ADD_POST }
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;