import React from 'react';
// import {createRef} from 'react';
// import mp from './MyPosts.module.css';
// import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newText) => {
            let action = updateNewPostTextActionCreator(newText);
            dispatch(action)
        },
        addPost: ()=> {dispatch(addPostActionCreator())}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
