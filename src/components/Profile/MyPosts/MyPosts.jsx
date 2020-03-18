import React from 'react';
import mp from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts =  (props) => {
  
  let postsElements = props.posts.map((posts)=><Post message={posts.message} likesCount={posts.likesCount} />)
  return (
    <div className={mp.postsBlock}>
      <h1>My posts</h1>
          <div>
            <textarea >Что нового?</textarea>
          <div/>
            <button>Add post</button>
          </div>
      <div className={mp.posts}>
        {/* <Post message="where is my mind?" likesCount="11" />
        <Post message="wheeeeere is my mind?" likesCount="22" /> */}
      {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;