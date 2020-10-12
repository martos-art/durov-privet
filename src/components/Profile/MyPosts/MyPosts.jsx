import React from 'react';
import { createRef } from 'react';
import mp from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts =  (props) => {
  
  let postsElements = props.posts.map((posts)=><Post message={posts.message} likesCount={posts.likesCount} />)

  let newPostsElement = React.createRef();

  let addNewPost = () => {

    let text = newPostsElement.current.value;
    props.addPost(text)
  }

  return (
    <div className={mp.postsBlock}>
      <h1>My posts</h1>
          <div>
            <textarea ref={ newPostsElement } > </textarea>
          <div/>
            <button onClick={ addNewPost }>Add post</button>
          </div>
      <div className={mp.posts}>
      {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;