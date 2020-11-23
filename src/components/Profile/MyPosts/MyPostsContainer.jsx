import React from 'react';
import {createRef} from 'react';
import mp from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (newText) => {
        let action = updateNewPostTextActionCreator(newText);
        props.store.dispatch(action)
        // props.updateNewPostText(newText);
        // props.dispatch(updateNewPostTextActionCreator(newText))
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
    )
};

export default MyPostsContainer;