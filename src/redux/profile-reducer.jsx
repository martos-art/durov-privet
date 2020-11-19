const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.unshift(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
};
export const addPostActionCreator = () => ({ type: ADD_POST });///<------ return { type: ADD_POST }
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText: newText});

export default profileReducer;


//if (action.type === ADD_POST) {
//    let newPost = {
//      id: 5,
//    message: state.newPostText,
//  likesCount: 0
// };
//state.posts.unshift(newPost);
//state.newPostText = "";
//
//} else if (action.type === UPDATE_NEW_POST_TEXT) {
//  state.newPostText = action.newText;

//}
//return state;


// if (action.type === ADD_POST) {
//     let newMessage = {
//         id: 5,
//         message: this._state.profilePage.newPostText,
//         likesCount: 0
//     };
//     this._state.profilePage.posts.unshift(newMessage);
//     this._state.profilePage.newPostText = "";
//     this._callSubscriber(this._state);
//
// } else if (action.type === UPDATE_NEW_POST_TEXT) {
//     this._state.profilePage.newPostText = action.newText;
//     this._callSubscriber(this._state);