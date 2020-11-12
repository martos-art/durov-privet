import React from 'react';
import {createRef} from 'react';
import mp from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

    let postsElements = props.posts.map((posts) => <Post message={posts.message} likesCount={posts.likesCount}/>)

    let newPostsElement = React.createRef();
    // let addNewPost = () => {
    //     let text = newPostsElement.current.value;
    //     props.addPost(text);
    //     newPostsElement.current.value = ""
    // }
    let addNewPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let newText = newPostsElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(newText))
    }

    return (
        <div className={mp.postsBlock}>
            <h1>My posts</h1>
            <div>

                <textarea onChange={onPostChange}
                          ref={newPostsElement}
                          value={props.newPostText}
                />
                <div/>
                <button onClick={addNewPost}>Add post</button>
            </div>
            <div className={mp.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;