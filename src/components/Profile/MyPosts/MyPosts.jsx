import React from 'react';
import prof from './MyPosts.module.css';
import Post from './Post/Post'
const MyPosts = () => {
  return (
      <div>
        my posts
          <div>
          New post
          </div>
        <div className={prof.posts}>
        <Post/>
        <Post/>

        </div>
      </div>
  )
};

export default MyPosts;